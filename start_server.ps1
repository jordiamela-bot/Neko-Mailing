# Local Web Server for Neko Mailing
$port = 8082
$root = $PSScriptRoot
$url = "http://localhost:$port/"

try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
    Write-Host "✅ Server Started at $url"
    Write-Host "Root: $root"
    Write-Host "Open this in your browser: http://localhost:$port/modern-neko/index.html"
    
    # Auto-open browser
    Start-Process "$url/modern-neko/index.html"
}
catch {
    Write-Error "❌ Could not start server. Port $port might be busy."
    exit
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $response = $context.Response
        $request = $context.Request
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/modern-neko/index.html" }
        $localPath = [System.IO.Path]::GetFullPath((Join-Path $root $path.TrimStart('/')))

        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            switch ($ext) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css" }
                ".js"   { $response.ContentType = "application/javascript" }
                ".json" { $response.ContentType = "application/json" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif"  { $response.ContentType = "image/gif" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                ".webp" { $response.ContentType = "image/webp" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.StatusCode = 200
        }
        else {
            $response.StatusCode = 404
        }
    }
    catch {
        $response.StatusCode = 500
    }
    finally {
        if ($null -ne $response) { $response.Close() }
    }
}
