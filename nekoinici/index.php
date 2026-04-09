<?php
require_once __DIR__ . "/includes/public_home_i18n.php";
require_once __DIR__ . "/includes/public_home_legal_notice.php";

function public_home_h($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, "UTF-8");
}

function public_home_prepare_target_url($target, $lang)
{
    $target = trim((string) $target);

    if ($target === "" || $target === "#") {
        return "#";
    }

    if (preg_match('/^(https?:\/\/|mailto:|tel:|\/)/i', $target)) {
        return $target;
    }

    $fragment = "";
    if (strpos($target, "#") !== false) {
        list($target, $fragment_part) = explode("#", $target, 2);
        $fragment = "#" . $fragment_part;
    }

    $separator = strpos($target, "?") === false ? "?" : "&";
    return $target . $separator . "lang=" . rawurlencode($lang) . $fragment;
}

$idioma_publico = public_home_default_language();
if (isset($_GET["lang"])) {
    $idioma_publico = public_home_resolve_language($_GET["lang"]);
}

$lang_html_map = array(
    "ca" => "ca-ES",
    "es" => "es-ES",
    "en" => "en",
    "pt" => "pt-PT",
    "fr" => "fr-FR",
);

$lang_html = isset($lang_html_map[$idioma_publico]) ? $lang_html_map[$idioma_publico] : "es-ES";
$current_script = basename($_SERVER["PHP_SELF"] ?? "index.php");

// Atualize estes dois destinos quando a página de acesso com base de dados estiver pronta.
$login_target = "#";
$register_target = "#";

$login_url = public_home_prepare_target_url($login_target, $idioma_publico);
$register_url = public_home_prepare_target_url($register_target, $idioma_publico);

$params_lang = $_GET;
unset($params_lang["lang"]);
$params_home = $params_lang;
$params_home["lang"] = $idioma_publico;
$url_home = $current_script . (count($params_home) ? "?" . http_build_query($params_home) : "");

$language_options = public_home_language_options();
$language_links = array();
foreach ($language_options as $lang_code => $lang_data) {
    $lang_params = $params_lang;
    $lang_params["lang"] = $lang_code;
    $language_links[$lang_code] = $current_script . "?" . http_build_query($lang_params);
}

$portal_name = public_home_text("portal_name", $idioma_publico);
$platform_label = public_home_text("platform_label", $idioma_publico);
$language_label = public_home_text("language_label", $idioma_publico);
$hero_eyebrow = public_home_text("hero_eyebrow", $idioma_publico);
$hero_intro = public_home_text("hero_intro", $idioma_publico);
$hero_primary = public_home_text("hero_primary", $idioma_publico);
$hero_secondary = public_home_text("hero_secondary", $idioma_publico);
$hero_signal = public_home_text("hero_signal", $idioma_publico);
$metric_one = public_home_text("metric_one", $idioma_publico);
$metric_two = public_home_text("metric_two", $idioma_publico);
$metric_three = public_home_text("metric_three", $idioma_publico);
$story_intro = public_home_text("story_intro", $idioma_publico);
$story_tag_one = public_home_text("story_tag_one", $idioma_publico);
$story_tag_two = public_home_text("story_tag_two", $idioma_publico);
$showcase_label = public_home_text("showcase_label", $idioma_publico);
$showcase_title = public_home_text("showcase_title", $idioma_publico);
$showcase_card_one = public_home_text("showcase_card_one", $idioma_publico);
$showcase_card_two = public_home_text("showcase_card_two", $idioma_publico);
$story_html_primary = public_home_text("story_html_primary", $idioma_publico);
$story_html_secondary = public_home_text("story_html_secondary", $idioma_publico);
$legal_notice_title = public_home_text("legal_notice", $idioma_publico);
$close_text = public_home_text("close", $idioma_publico);
$scroll_up = public_home_text("scroll_up", $idioma_publico);
$cookie_text = public_home_text("cookie_text", $idioma_publico);
$cookie_more_info = public_home_text("cookie_more_info", $idioma_publico);
$privacy_policy = public_home_text("privacy_policy", $idioma_publico);
$accept_text = public_home_text("accept", $idioma_publico);
$cancel_text = public_home_text("cancel", $idioma_publico);
$aviso_legal = public_home_legal_notice_html($idioma_publico);

$company_name = "Red Phone Events, S.L.";
$company_street = "C/Pelai, 32 4t2a";
$company_city = "08001 Barcelona";
$company_tax = "NIF B67030817";
$company_email = "info@nekomailing.com";

$cookie_status = isset($_COOKIE["i_cookies"]) ? (string) $_COOKIE["i_cookies"] : "";
if ($cookie_status === "1") {
    setcookie("i_cookies", "2", time() + 60 * 60 * 24 * 365, "/");
    $cookie_status = "2";
}
$show_cookie_banner = ($cookie_status !== "2");
?>
<!DOCTYPE html>
<html dir="ltr" lang="<?php echo public_home_h($lang_html); ?>">

<head>
    <meta charset="utf-8">
    <title>Neko Mailing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo public_home_h($hero_intro); ?>">
    <meta property="og:image" content="img/logo_neko_mailing.jpg">
    <meta property="og:title" content="Neko Mailing">
    <meta property="og:description" content="<?php echo public_home_h($hero_intro); ?>">
    <link rel="icon" type="image/png" href="../Favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet" type="text/css">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/estilos.css?v=<?php echo time(); ?>" rel="stylesheet" type="text/css">
    <link href="css/estilos_cookies.css" rel="stylesheet" type="text/css">
    <link href="css/home_public.css?v=<?php echo time(); ?>" rel="stylesheet" type="text/css">
    <script src="https://kit.fontawesome.com/fdccc27bda.js" crossorigin="anonymous"></script>
    <style>
        body.public-home {
            --home-bg: #ffffff;
            --home-surface: #ffffff;
            --home-soft: #d6d6d6;
            --home-soft-2: #d6d6d6;
            --home-soft-3: #d6d6d6;
            --home-accent: #77cfca;
            --home-deep: #003644;
            --home-text: #737373;
            --home-contrast: #ffffff;
            --home-footer-bg: #003644;
            --home-footer-text: #ffffff;
        }

        body.public-home .modal-header .btn-close {
            margin-left: auto;
        }
    </style>
</head>

<body class="stretched public-home">
    <?php if ($show_cookie_banner) { ?>
        <div style="text-align:center">
            <div id="cookie">
                <?php echo public_home_h($cookie_text); ?><br>
                <?php echo public_home_h($cookie_more_info); ?>
                <a href="#myModal_aviso" class="cookie_anchor" data-bs-toggle="modal"
                    data-bs-target="#myModal_aviso"><b><?php echo public_home_h($privacy_policy); ?></b></a>.<br><br>
                <input type="button" class="btn boton_aceptar" value="<?php echo public_home_h($accept_text); ?>"
                    onclick="publicHomeAcceptCookies(event)" id="cookie_click">
                &nbsp;&nbsp;&nbsp;
                <input type="button" class="btn btn-danger" value="<?php echo public_home_h($cancel_text); ?>"
                    onclick="publicHomeDismissCookies(event)" id="cookie_click_cancelar">
            </div>
        </div>
    <?php } ?>

    <div id="wrapper" class="clearfix">
        <section id="content">
            <div class="container-fluid clearfix">
                <nav class="public-nav-shell" id="top">
                    <div class="public-nav-wrap">
                        <div class="public-nav">
                            <a class="public-brand" href="<?php echo public_home_h($url_home); ?>">
                                <span class="public-brand-mark">
                                    <img src="img/neko_logo.png" alt="<?php echo public_home_h($portal_name); ?>">
                                </span>
                                <span class="public-brand-copy">
                                    <small><?php echo public_home_h($platform_label); ?></small>
                                    <strong><?php echo public_home_h($portal_name); ?></strong>
                                </span>
                            </a>
                            <div class="public-nav-actions">
                                <div class="public-lang-switch"
                                    aria-label="<?php echo public_home_h($language_label); ?>">
                                    <?php foreach ($language_options as $lang_code => $lang_data) { ?>
                                        <a class="public-lang-link <?php if ($idioma_publico === $lang_code)
                                            echo "is-active"; ?>"
                                            href="<?php echo public_home_h($language_links[$lang_code]); ?>"
                                            title="<?php echo public_home_h($lang_data["name"]); ?>"
                                            aria-label="<?php echo public_home_h($lang_data["name"]); ?>"><?php echo public_home_h($lang_data["short"]); ?></a>
                                    <?php } ?>
                                </div>
                                <a class="btn public-nav-button public-nav-button-secondary"
                                    href="<?php echo public_home_h($login_url); ?>"><?php echo public_home_h(public_home_text("nav_login", $idioma_publico)); ?></a>
                                <a class="btn public-nav-button public-nav-button-primary"
                                    href="<?php echo public_home_h($register_url); ?>"><?php echo public_home_h(public_home_text("register", $idioma_publico)); ?></a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="public-home-page">
                    <section id="web" class="landing-view landing-view-home">
                        <div class="landing-hero">
                            <div class="landing-copy">
                                <div class="landing-brand-chip">
                                    <img src="img/neko_logo.png" alt="<?php echo public_home_h($portal_name); ?>">
                                    <span><?php echo public_home_h($portal_name); ?></span>
                                </div>
                                <span class="landing-eyebrow"><?php echo public_home_h($hero_eyebrow); ?></span>
                                <h1 class="landing-title"><?php echo public_home_h($portal_name); ?></h1>
                                <p class="landing-intro" style="font-size:1.6em;">
                                    <?php echo public_home_h($hero_intro); ?></p>
                                <div class="landing-actions">
                                    <a class="btn landing-button landing-button-primary"
                                        href="<?php echo public_home_h($register_url); ?>"><?php echo public_home_h($hero_primary); ?></a>
                                    <a class="btn landing-button landing-button-secondary"
                                        href="<?php echo public_home_h($login_url); ?>"><?php echo public_home_h($hero_secondary); ?></a>
                                </div>
                                <p class="landing-signal"><?php echo public_home_h($hero_signal); ?></p>
                                <div class="landing-metrics">
                                    <article class="landing-metric">
                                        <i class="fas fa-layer-group"></i>
                                        <span><?php echo public_home_h($metric_one); ?></span>
                                    </article>
                                    <article class="landing-metric">
                                        <i class="fas fa-users"></i>
                                        <span><?php echo public_home_h($metric_two); ?></span>
                                    </article>
                                    <article class="landing-metric">
                                        <i class="fas fa-chart-line"></i>
                                        <span><?php echo public_home_h($metric_three); ?></span>
                                    </article>
                                </div>
                            </div>

                            <div class="landing-visual">
                                <div class="landing-visual-board">
                                    <figure class="visual-card visual-card-main">
                                        <img src="img/email3.jpg" alt="<?php echo public_home_h($portal_name); ?>"
                                            loading="lazy">
                                    </figure>
                                    <figure class="visual-card visual-card-secondary">
                                        <img src="img/email2.jpg" alt="<?php echo public_home_h($showcase_card_one); ?>"
                                            loading="lazy">
                                    </figure>
                                    <figure class="visual-card visual-card-tertiary">
                                        <img src="img/email.jpg" alt="<?php echo public_home_h($showcase_card_two); ?>"
                                            loading="lazy">
                                    </figure>
                                    <div class="visual-floating-note">
                                        <span><?php echo public_home_h($showcase_label); ?></span>
                                        <strong><?php echo public_home_h($showcase_title); ?></strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="landing-story-intro">
                            <p><?php echo public_home_h($story_intro); ?></p>
                        </div>

                        <div class="landing-story-grid">
                            <article class="story-card story-card-primary">
                                <div class="story-card-head">
                                    <span class="story-tag"><?php echo public_home_h($story_tag_one); ?></span>
                                </div>
                                <div class="landing-richtext"><?php echo $story_html_primary; ?></div>
                            </article>
                            <article class="story-card story-card-secondary">
                                <div class="story-card-head">
                                    <span class="story-tag"><?php echo public_home_h($story_tag_two); ?></span>
                                </div>
                                <div class="landing-richtext"><?php echo $story_html_secondary; ?></div>
                            </article>
                        </div>
                    </section>
                </div>

                <footer class="public-footer" style="background-color:rgba(255,255,255,0.78);color:var(--home-deep)">
                    <div class="public-footer-inner">
                        <div class="public-footer-grid">
                            <div class="public-footer-brand">
                                <span class="public-footer-label"><?php echo public_home_h($platform_label); ?></span>
                                <h2>Neko Mailing</h2>
                                <p><?php echo public_home_h($company_name); ?></p>
                                <p><?php echo public_home_h($company_street); ?></p>
                                <p><?php echo public_home_h($company_city); ?></p>
                            </div>
                            <div class="public-footer-meta">
                                <p><?php echo public_home_h($portal_name); ?></p>
                                <p><?php echo public_home_h($hero_eyebrow); ?></p>
                                <p><?php echo public_home_h($company_tax); ?></p>
                            </div>
                            <div class="public-footer-contact">
                                <a href="mailto:<?php echo public_home_h($company_email); ?>">
                                    <i class="fas fa-envelope"></i>
                                    <span><?php echo public_home_h($company_email); ?></span>
                                </a>
                            </div>
                            <div class="public-footer-actions">
                                <a href="#top" class="public-footer-link">
                                    <i class="fas fa-arrow-up"></i>
                                    <span><?php echo public_home_h($scroll_up); ?></span>
                                </a>
                                <button type="button" class="public-footer-link public-footer-button"
                                    data-bs-toggle="modal" data-bs-target="#myModal_aviso">
                                    <i class="fas fa-balance-scale"></i>
                                    <span><?php echo public_home_h($legal_notice_title); ?></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    </div>

    <div class="modal fade" id="myModal_aviso" tabindex="-1" aria-labelledby="legalNoticeLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="legalNoticeLabel"><?php echo public_home_h($legal_notice_title); ?></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="<?php echo public_home_h($close_text); ?>"></button>
                </div>
                <div class="myModal_body py-2 px-2">
                    <div style="height:540px;overflow-y:auto;border:1px solid #e5e5e5;" id="myModalm_cuerpos">
                        <?php echo $aviso_legal; ?>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary"
                        data-bs-dismiss="modal"><?php echo public_home_h($close_text); ?></button>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
        function publicHomeHideCookieBanner() {
            var cookie = document.getElementById("cookie");
            if (cookie) {
                cookie.style.visibility = "hidden";
                cookie.style.display = "none";
            }
        }

        function publicHomeAcceptCookies(event) {
            if (event) {
                event.preventDefault();
            }
            var expires = new Date();
            expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
            document.cookie = "i_cookies=2; expires=" + expires.toUTCString() + "; path=/; SameSite=Lax";
            publicHomeHideCookieBanner();
        }

        function publicHomeDismissCookies(event) {
            if (event) {
                event.preventDefault();
            }
            publicHomeHideCookieBanner();
        }
    </script>
</body>

</html>