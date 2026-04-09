<?php

function public_home_default_language()
{
    return "ca";
}

function public_home_language_options()
{
    return array(
        "ca" => array("short" => "CA", "name" => "Català"),
        "es" => array("short" => "ES", "name" => "Castellano"),
        "en" => array("short" => "EN", "name" => "English"),
        "pt" => array("short" => "PT", "name" => "Português"),
        "fr" => array("short" => "FR", "name" => "Français"),
    );
}

function public_home_supported_languages()
{
    return array_keys(public_home_language_options());
}

function public_home_resolve_language($lang = null)
{
    $lang = is_string($lang) ? strtolower(trim($lang)) : "";
    if($lang === "" || !in_array($lang, public_home_supported_languages(), true)) {
        return public_home_default_language();
    }
    return $lang;
}

function public_home_catalog()
{
    static $catalog = null;
    if($catalog !== null) {
        return $catalog;
    }

    $catalog = array(
        "es" => array(
            "portal_name" => "Newslettering para colectivos",
            "platform_label" => "Plataforma de email marketing",
            "language_label" => "Idioma",
            "email" => "Correo electrónico",
            "password" => "Password",
            "enter" => "Entrar",
            "register" => "Registrarse",
            "nav_login" => "Iniciar Sesión",
            "hero_eyebrow" => "Plataforma de email marketing para asociaciones y colectivos",
            "hero_intro" => "Diseña newsletters, centraliza campañas y mantén a tu comunidad conectada con una experiencia clara, elegante y lista para crecer.",
            "hero_primary" => "Crear cuenta gratuita",
            "hero_secondary" => "Acceder al panel",
            "hero_signal" => "Una herramienta pensada para equipos que necesitan comunicar mejor, con menos fricción y más control.",
            "metric_one" => "Comunicación centralizada",
            "metric_two" => "Segmentación inteligente",
            "metric_three" => "Resultados en tiempo real",
            "story_intro" => "Todo el potencial de tu comunicación, organizado con una interfaz más clara y visual.",
            "story_tag_one" => "Relato principal",
            "story_tag_two" => "Impacto y crecimiento",
            "showcase_label" => "Diseño editorial",
            "showcase_title" => "Un escaparate visual para campañas, newsletters y acciones destacadas.",
            "showcase_card_one" => "Campañas con identidad",
            "showcase_card_two" => "Recursos visuales",
            "login_kicker" => "Acceso al panel",
            "login_title" => "Todo listo para volver a entrar y seguir con tu próxima campaña.",
            "login_text" => "Accede a tus newsletters, estadísticas y contactos desde un entorno más claro y directo.",
            "login_point_one" => "Recupera campañas anteriores y reutiliza diseños guardados.",
            "login_point_two" => "Consulta aperturas, clics y resultados en un solo lugar.",
            "login_point_three" => "Gestiona contactos, grupos y envíos sin salir del flujo.",
            "forgot_text" => "Te ayudamos a recuperar tu contraseña para que vuelvas al panel sin esperas.",
            "register_kicker" => "Crear una cuenta",
            "register_title" => "Empieza con una cuenta nueva y valida tu correo para activar tu espacio.",
            "register_text" => "Configura tu acceso inicial y empieza a diseñar campañas en pocos pasos.",
            "register_point_one" => "Trabaja con una plataforma preparada para crecer con tu equipo.",
            "register_point_two" => "Mantén tu identidad visual en cada campaña.",
            "register_point_three" => "Organiza tus audiencias y mide cada envío.",
            "back_home" => "Volver al inicio",
            "back_access" => "Volver al acceso",
            "hello_again" => "¡Hola de nuevo!",
            "now_can_login" => "Ahora puedes iniciar tu sesión",
            "forgot_password" => "He olvidado mi contraseña",
            "recovery_password" => "Recuperación de contraseña",
            "recovery_email_label" => "Para recuperar la contraseña escribe tu email",
            "send" => "Enviar",
            "create_account_headline" => "¡Crea ahora tu cuenta gratuita en Neko Mailing!",
            "create_account_intro" => "Inserta tus datos y podrás empezar tu campaña en <br> Neko Mailing",
            "legal_notice" => "Aviso Legal",
            "notice" => "Aviso",
            "close" => "Cerrar",
            "scroll_up" => "Subir",
            "cookie_text" => "Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúas navegando, consideramos que aceptas su uso.",
            "cookie_more_info" => "Puedes cambiar la configuración u obtener más información en",
            "privacy_policy" => "Política de Privacidad",
            "accept" => "Aceptar",
            "cancel" => "Cancelar",
            "error_email_blank" => "- El correo electrónico no puede estar en blanco <br>",
            "error_email_invalid" => "- Correo electrónico inválido <br>",
            "error_password_blank" => "- La contraseña no puede estar en blanco <br>",
            "account_created_title" => "Cuenta creada con éxito en <br> Neko Mailing",
            "good_work" => "Buen trabajo",
            "verify_email_text" => "Ahora vamos a verificar tu dirección de correo electrónico. Ante todo, seguridad.",
            "email_sent_text" => "Te hemos enviado un correo electrónico a la dirección proporcionada. Una vez validado, podrás empezar tu campaña.",
            "problem_happened" => "Ha sucedido un problema",
            "error" => "Error",
            "existing_email" => "Email ya existente",
            "email_not_found" => "Email no existente",
            "send_error" => "Error de envío.",
            "message_sent_thanks" => "Tu mensaje ha sido enviado. <br>Muchas gracias.",
            "confirm_email_subject" => "Correo de registro",
            "confirm_email_preheader" => "Registro Neko Mailing",
            "confirm_email_registered" => "Tu dirección de e-mail se ha registrado correctamente en Neko Mailing.",
            "confirm_email_intro" => "Para validar tu cuenta y poder enviar campañas, haz clic en el siguiente botón.",
            "confirm_email_button" => "Confirmar",
            "confirm_email_ignore" => "Si no has asociado tu dirección a una cuenta de Neko Mailing, ignora este mensaje y no hagas clic en el enlace. <br><br><br> Si por alguna razón no funciona el enlace, puedes copiar y pegar esta dirección en tu navegador.<br><br>",
            "confirm_email_copy_notice" => "Se ha registrado %s en Neko Mailing",
            "recovery_email_subject" => "Recuperación de contraseña",
            "recovery_email_intro" => "Este es un mensaje de recuperación de contraseña de Neko Mailing solicitado por el usuario.",
            "recovery_email_password_label" => "La contraseña solicitada es:",
            "recovery_email_panel_link" => "El enlace para acceder a tu panel de usuario es:",
            "recovery_email_thanks" => "Gracias por confiar en Neko Mailing",
            "story_html_primary" => <<<'HTML'
<p><strong>¡Impulsa tu colectivo con Neko Mailing, la plataforma de email marketing diseñada para asociaciones!</strong></p>
<p>En <strong>Neko Mailing</strong> entendemos las necesidades específicas de colectivos y asociaciones, por eso hemos desarrollado una plataforma que permite gestionar la comunicación de forma centralizada y efectiva. Ayudamos a que los miembros de tu asociación estén siempre informados y conectados.</p>
<p><strong>¿Qué ofrece Neko Mailing a tu asociación?</strong></p>
<ul>
<li><strong>Newsletters personalizadas</strong>: Crea boletines atractivos y adaptados a los intereses de tus miembros, manteniéndolos al día con las últimas novedades.</li>
<li><strong>Gestión centralizada</strong>: Administra las campañas de todos los miembros desde una única plataforma, optimizando tiempo y recursos.</li>
<li><strong>Segmentación avanzada</strong>: Organiza a tus suscriptores por intereses, grupos o actividades, enviando mensajes relevantes que generen más impacto.</li>
<li><strong>Análisis en tiempo real</strong>: Mide el rendimiento de tus campañas con datos como tasas de apertura, clics y conversiones. Esta información te permitirá ajustar y mejorar tus estrategias de comunicación.</li>
</ul>
HTML,
            "story_html_secondary" => <<<'HTML'
<p><strong>Con Neko Mailing, tu colectivo podrá:</strong></p>
<p><br />✔️ <strong>Fortalecer la comunidad interna</strong>, manteniendo a todos los miembros informados.<br />✔️ <strong>Ampliar el alcance de tus iniciativas</strong> con campañas que conecten con más personas interesadas en tus actividades.<br />✔️ <strong>Optimizar recursos</strong>, gracias a una plataforma intuitiva y diseñada para asociaciones.</p>
<p><strong>Haz crecer el impacto de tu colectivo con Neko Mailing.</strong></p>
<p><br />Únete a la plataforma líder en email marketing para asociaciones y colectivos. ¡Transforma la comunicación de tu grupo y potencia tus resultados!</p>
<blockquote>
<p><strong>Descubre más</strong> sobre cómo Neko Mailing puede revolucionar la comunicación en tu asociación.</p>
<p><strong>¡Empieza hoy mismo!</strong></p>
</blockquote>
HTML,
        ),
        "ca" => array(
            "portal_name" => "Newslettering per a col·lectius",
            "platform_label" => "Plataforma d'email màrqueting",
            "language_label" => "Idioma",
            "email" => "Correu electrònic",
            "password" => "Contrasenya",
            "enter" => "Entrar",
            "register" => "Registrar-se",
            "nav_login" => "Iniciar sessió",
            "hero_eyebrow" => "Plataforma d'email màrqueting per a associacions i col·lectius",
            "hero_intro" => "Dissenya newsletters, centralitza campanyes i mantén la teva comunitat connectada amb una experiència clara, elegant i preparada per créixer.",
            "hero_primary" => "Crear compte gratuït",
            "hero_secondary" => "Accedir al panell",
            "hero_signal" => "Una eina pensada per a equips que necessiten comunicar millor, amb menys fricció i més control.",
            "metric_one" => "Comunicació centralitzada",
            "metric_two" => "Segmentació intel·ligent",
            "metric_three" => "Resultats en temps real",
            "story_intro" => "Tot el potencial de la teva comunicació, organitzat amb una interfície més clara i visual.",
            "story_tag_one" => "Relat principal",
            "story_tag_two" => "Impacte i creixement",
            "showcase_label" => "Disseny editorial",
            "showcase_title" => "Un aparador visual per a campanyes, newsletters i accions destacades.",
            "showcase_card_one" => "Campanyes amb identitat",
            "showcase_card_two" => "Recursos visuals",
            "login_kicker" => "Accés al panell",
            "login_title" => "Tot a punt per tornar a entrar i continuar amb la teva propera campanya.",
            "login_text" => "Accedeix a les teves newsletters, estadístiques i contactes des d'un entorn més clar i directe.",
            "login_point_one" => "Recupera campanyes anteriors i reutilitza dissenys desats.",
            "login_point_two" => "Consulta obertures, clics i resultats en un sol lloc.",
            "login_point_three" => "Gestiona contactes, grups i enviaments sense sortir del flux.",
            "forgot_text" => "T'ajudem a recuperar la contrasenya perquè tornis al panell sense esperes.",
            "register_kicker" => "Crear un compte",
            "register_title" => "Comença amb un compte nou i valida el teu correu per activar el teu espai.",
            "register_text" => "Configura el teu accés inicial i comença a dissenyar campanyes en pocs passos.",
            "register_point_one" => "Treballa amb una plataforma preparada per créixer amb el teu equip.",
            "register_point_two" => "Mantén la teva identitat visual en cada campanya.",
            "register_point_three" => "Organitza les teves audiències i mesura cada enviament.",
            "back_home" => "Tornar a l'inici",
            "back_access" => "Tornar a l'accés",
            "hello_again" => "Hola de nou!",
            "now_can_login" => "Ara pots iniciar la sessió",
            "forgot_password" => "He oblidat la contrasenya",
            "recovery_password" => "Recuperació de contrasenya",
            "recovery_email_label" => "Per recuperar la contrasenya escriu el teu correu electrònic",
            "send" => "Enviar",
            "create_account_headline" => "Crea ara el teu compte gratuït a Neko Mailing!",
            "create_account_intro" => "Introdueix les teves dades i podràs començar la teva campanya a <br> Neko Mailing",
            "legal_notice" => "Avís legal",
            "notice" => "Avís",
            "close" => "Tancar",
            "scroll_up" => "Pujar",
            "cookie_text" => "Utilitzem cookies pròpies i de tercers per millorar els nostres serveis. Si continues navegant, considerem que n'acceptes l'ús.",
            "cookie_more_info" => "Pots canviar la configuració o obtenir més informació a",
            "privacy_policy" => "Política de privacitat",
            "accept" => "Acceptar",
            "cancel" => "Cancel·lar",
            "error_email_blank" => "- El correu electrònic no pot estar en blanc <br>",
            "error_email_invalid" => "- Correu electrònic no vàlid <br>",
            "error_password_blank" => "- La contrasenya no pot estar en blanc <br>",
            "account_created_title" => "Compte creat correctament a <br> Neko Mailing",
            "good_work" => "Bona feina",
            "verify_email_text" => "Ara verificarem la teva adreça de correu electrònic. Abans de res, seguretat.",
            "email_sent_text" => "T'hem enviat un correu electrònic a l'adreça indicada. Un cop validat, podràs començar la teva campanya.",
            "problem_happened" => "S'ha produït un problema",
            "error" => "Error",
            "existing_email" => "El correu electrònic ja existeix",
            "email_not_found" => "Correu electrònic inexistent",
            "send_error" => "Error d'enviament.",
            "message_sent_thanks" => "El teu missatge s'ha enviat. <br>Moltes gràcies.",
            "confirm_email_subject" => "Correu de registre",
            "confirm_email_preheader" => "Registre Neko Mailing",
            "confirm_email_registered" => "La teva adreça de correu electrònic s'ha registrat correctament a Neko Mailing.",
            "confirm_email_intro" => "Per validar el teu compte i poder enviar campanyes, fes clic al botó següent.",
            "confirm_email_button" => "Confirmar",
            "confirm_email_ignore" => "Si no has associat la teva adreça a un compte de Neko Mailing, ignora aquest missatge i no facis clic a l'enllaç. <br><br><br> Si per alguna raó l'enllaç no funciona, pots copiar i enganxar aquesta adreça al teu navegador.<br><br>",
            "confirm_email_copy_notice" => "S'ha registrat %s a Neko Mailing",
            "recovery_email_subject" => "Recuperació de contrasenya",
            "recovery_email_intro" => "Aquest és un missatge de recuperació de contrasenya de Neko Mailing sol·licitat per l'usuari.",
            "recovery_email_password_label" => "La contrasenya sol·licitada és:",
            "recovery_email_panel_link" => "L'enllaç per accedir al teu panell d'usuari és:",
            "recovery_email_thanks" => "Gràcies per confiar en Neko Mailing",
            "story_html_primary" => <<<'HTML'
<p><strong>Impulsa el teu col·lectiu amb Neko Mailing, la plataforma d'email màrqueting dissenyada per a associacions!</strong></p>
<p>A <strong>Neko Mailing</strong> entenem les necessitats específiques de col·lectius i associacions, per això hem desenvolupat una plataforma que permet gestionar la comunicació de manera centralitzada i efectiva. Ajudem que els membres de la teva associació estiguin sempre informats i connectats.</p>
<p><strong>Què ofereix Neko Mailing a la teva associació?</strong></p>
<ul>
<li><strong>Butlletins personalitzats</strong>: Crea newsletters atractives i adaptades als interessos dels teus membres, mantenint-los al dia amb les últimes novetats.</li>
<li><strong>Gestió centralitzada</strong>: Administra les campanyes de tots els membres des d'una única plataforma, optimitzant temps i recursos.</li>
<li><strong>Segmentació avançada</strong>: Organitza els teus subscriptors per interessos, grups o activitats, enviant missatges rellevants que generin més impacte.</li>
<li><strong>Anàlisi en temps real</strong>: Mesura el rendiment de les teves campanyes amb dades com taxes d'obertura, clics i conversions. Aquesta informació et permetrà ajustar i millorar les teves estratègies de comunicació.</li>
</ul>
HTML,
            "story_html_secondary" => <<<'HTML'
<p><strong>Amb Neko Mailing, el teu col·lectiu podrà:</strong></p>
<p><br />✔️ <strong>Enfortir la comunitat interna</strong>, mantenint tots els membres informats.<br />✔️ <strong>Ampliar l'abast de les teves iniciatives</strong> amb campanyes que connectin amb més persones interessades en les teves activitats.<br />✔️ <strong>Optimitzar recursos</strong>, gràcies a una plataforma intuïtiva i dissenyada per a associacions.</p>
<p><strong>Fes créixer l'impacte del teu col·lectiu amb Neko Mailing.</strong></p>
<p><br />Uneix-te a la plataforma líder en email màrqueting per a associacions i col·lectius. Transforma la comunicació del teu grup i potencia els teus resultats!</p>
<blockquote>
<p><strong>Descobreix més</strong> sobre com Neko Mailing pot revolucionar la comunicació de la teva associació.</p>
<p><strong>Comença avui mateix!</strong></p>
</blockquote>
HTML,
        ),
        "en" => array(
            "portal_name" => "Newslettering for collectives",
            "platform_label" => "Email marketing platform",
            "language_label" => "Language",
            "email" => "Email address",
            "password" => "Password",
            "enter" => "Sign in",
            "register" => "Register",
            "nav_login" => "Log in",
            "hero_eyebrow" => "Email marketing platform for associations and collectives",
            "hero_intro" => "Design newsletters, centralize campaigns and keep your community connected with a clear, elegant experience built to grow.",
            "hero_primary" => "Create free account",
            "hero_secondary" => "Access dashboard",
            "hero_signal" => "A tool built for teams that need to communicate better, with less friction and more control.",
            "metric_one" => "Centralized communication",
            "metric_two" => "Smart segmentation",
            "metric_three" => "Real-time results",
            "story_intro" => "All the potential of your communication, organized with a clearer and more visual interface.",
            "story_tag_one" => "Main overview",
            "story_tag_two" => "Impact and growth",
            "showcase_label" => "Editorial design",
            "showcase_title" => "A visual showcase for campaigns, newsletters and featured actions.",
            "showcase_card_one" => "Branded campaigns",
            "showcase_card_two" => "Visual resources",
            "login_kicker" => "Dashboard access",
            "login_title" => "Everything is ready for you to sign back in and continue with your next campaign.",
            "login_text" => "Access your newsletters, statistics and contacts from a clearer, more direct environment.",
            "login_point_one" => "Recover previous campaigns and reuse saved designs.",
            "login_point_two" => "Check opens, clicks and results in one place.",
            "login_point_three" => "Manage contacts, groups and sends without leaving the flow.",
            "forgot_text" => "We help you recover your password so you can get back into the dashboard without delay.",
            "register_kicker" => "Create an account",
            "register_title" => "Start with a new account and verify your email to activate your space.",
            "register_text" => "Set up your first access and start designing campaigns in just a few steps.",
            "register_point_one" => "Work with a platform ready to grow with your team.",
            "register_point_two" => "Keep your visual identity in every campaign.",
            "register_point_three" => "Organize your audiences and measure every send.",
            "back_home" => "Back to home",
            "back_access" => "Back to access",
            "hello_again" => "Welcome back!",
            "now_can_login" => "You can sign in now",
            "forgot_password" => "I forgot my password",
            "recovery_password" => "Password recovery",
            "recovery_email_label" => "To recover your password, enter your email",
            "send" => "Send",
            "create_account_headline" => "Create your free Neko Mailing account now!",
            "create_account_intro" => "Enter your details and you can start your campaign in <br> Neko Mailing",
            "legal_notice" => "Legal notice",
            "notice" => "Notice",
            "close" => "Close",
            "scroll_up" => "Back to top",
            "cookie_text" => "We use our own and third-party cookies to improve our services. If you continue browsing, we understand that you accept their use.",
            "cookie_more_info" => "You can change the settings or get more information at",
            "privacy_policy" => "Privacy Policy",
            "accept" => "Accept",
            "cancel" => "Cancel",
            "error_email_blank" => "- Email address cannot be empty <br>",
            "error_email_invalid" => "- Invalid email address <br>",
            "error_password_blank" => "- Password cannot be empty <br>",
            "account_created_title" => "Account created successfully in <br> Neko Mailing",
            "good_work" => "Good work",
            "verify_email_text" => "Now we are going to verify your email address. First things first: security.",
            "email_sent_text" => "We have sent an email to the address you provided. Once verified, you will be able to start your campaign.",
            "problem_happened" => "There was a problem",
            "error" => "Error",
            "existing_email" => "Email already exists",
            "email_not_found" => "Email not found",
            "send_error" => "Sending error.",
            "message_sent_thanks" => "Your message has been sent. <br>Thank you very much.",
            "confirm_email_subject" => "Registration email",
            "confirm_email_preheader" => "Neko Mailing registration",
            "confirm_email_registered" => "Your email address has been registered successfully with Neko Mailing.",
            "confirm_email_intro" => "To validate your account and start sending campaigns, click the button below.",
            "confirm_email_button" => "Confirm",
            "confirm_email_ignore" => "If you did not link your address to a Neko Mailing account, ignore this message and do not click the link. <br><br><br> If for any reason the link does not work, you can copy and paste this address into your browser.<br><br>",
            "confirm_email_copy_notice" => "%s has registered in Neko Mailing",
            "recovery_email_subject" => "Password recovery",
            "recovery_email_intro" => "This is a password recovery message from Neko Mailing requested by the user.",
            "recovery_email_password_label" => "The requested password is:",
            "recovery_email_panel_link" => "The link to access your user dashboard is:",
            "recovery_email_thanks" => "Thank you for trusting Neko Mailing",
            "story_html_primary" => <<<'HTML'
<p><strong>Boost your collective with Neko Mailing, the email marketing platform designed for associations!</strong></p>
<p>At <strong>Neko Mailing</strong> we understand the specific needs of collectives and associations, so we have developed a platform that lets you manage communication in a centralized and effective way. We help the members of your association stay informed and connected at all times.</p>
<p><strong>What does Neko Mailing offer your association?</strong></p>
<ul>
<li><strong>Personalized newsletters</strong>: Create engaging bulletins tailored to your members' interests and keep them up to date with the latest news.</li>
<li><strong>Centralized management</strong>: Manage every member campaign from a single platform, optimizing time and resources.</li>
<li><strong>Advanced segmentation</strong>: Organize your subscribers by interests, groups or activities and send relevant messages that create greater impact.</li>
<li><strong>Real-time analytics</strong>: Measure campaign performance with data such as open rates, clicks and conversions. This information lets you fine-tune and improve your communication strategies.</li>
</ul>
HTML,
            "story_html_secondary" => <<<'HTML'
<p><strong>With Neko Mailing, your collective can:</strong></p>
<p><br />✔️ <strong>Strengthen your internal community</strong> by keeping every member informed.<br />✔️ <strong>Expand the reach of your initiatives</strong> with campaigns that connect with more people interested in your activities.<br />✔️ <strong>Optimize resources</strong> thanks to an intuitive platform designed for associations.</p>
<p><strong>Grow the impact of your collective with Neko Mailing.</strong></p>
<p><br />Join the leading email marketing platform for associations and collectives. Transform the communication of your group and boost your results.</p>
<blockquote>
<p><strong>Discover more</strong> about how Neko Mailing can revolutionize communication in your association.</p>
<p><strong>Start today!</strong></p>
</blockquote>
HTML,
        ),
        "pt" => array(
            "portal_name" => "Newslettering para coletivos",
            "platform_label" => "Plataforma de email marketing",
            "language_label" => "Idioma",
            "email" => "Correio eletrónico",
            "password" => "Palavra-passe",
            "enter" => "Entrar",
            "register" => "Registar-se",
            "nav_login" => "Iniciar sessão",
            "hero_eyebrow" => "Plataforma de email marketing para associações e coletivos",
            "hero_intro" => "Crie newsletters, centralize campanhas e mantenha a sua comunidade ligada com uma experiência clara, elegante e pronta para crescer.",
            "hero_primary" => "Criar conta gratuita",
            "hero_secondary" => "Aceder ao painel",
            "hero_signal" => "Uma ferramenta pensada para equipas que precisam de comunicar melhor, com menos fricção e mais controlo.",
            "metric_one" => "Comunicação centralizada",
            "metric_two" => "Segmentação inteligente",
            "metric_three" => "Resultados em tempo real",
            "story_intro" => "Todo o potencial da sua comunicação, organizado com uma interface mais clara e visual.",
            "story_tag_one" => "Visão principal",
            "story_tag_two" => "Impacto e crescimento",
            "showcase_label" => "Design editorial",
            "showcase_title" => "Uma montra visual para campanhas, newsletters e ações em destaque.",
            "showcase_card_one" => "Campanhas com identidade",
            "showcase_card_two" => "Recursos visuais",
            "login_kicker" => "Acesso ao painel",
            "login_title" => "Está tudo pronto para voltar a entrar e continuar com a sua próxima campanha.",
            "login_text" => "Aceda às suas newsletters, estatísticas e contactos a partir de um ambiente mais claro e direto.",
            "login_point_one" => "Recupere campanhas anteriores e reutilize designs guardados.",
            "login_point_two" => "Consulte aberturas, cliques e resultados num só lugar.",
            "login_point_three" => "Gira contactos, grupos e envios sem sair do fluxo.",
            "forgot_text" => "Ajudamo-lo a recuperar a palavra-passe para voltar ao painel sem esperas.",
            "register_kicker" => "Criar uma conta",
            "register_title" => "Comece com uma nova conta e valide o seu email para ativar o seu espaço.",
            "register_text" => "Configure o seu acesso inicial e comece a desenhar campanhas em poucos passos.",
            "register_point_one" => "Trabalhe com uma plataforma pronta para crescer com a sua equipa.",
            "register_point_two" => "Mantenha a sua identidade visual em cada campanha.",
            "register_point_three" => "Organize os seus públicos e meça cada envio.",
            "back_home" => "Voltar ao início",
            "back_access" => "Voltar ao acesso",
            "hello_again" => "Bem-vindo de volta!",
            "now_can_login" => "Agora pode iniciar a sua sessão",
            "forgot_password" => "Esqueci-me da palavra-passe",
            "recovery_password" => "Recuperação de palavra-passe",
            "recovery_email_label" => "Para recuperar a palavra-passe, escreva o seu email",
            "send" => "Enviar",
            "create_account_headline" => "Crie agora a sua conta gratuita no Neko Mailing!",
            "create_account_intro" => "Introduza os seus dados e poderá começar a sua campanha no <br> Neko Mailing",
            "legal_notice" => "Aviso legal",
            "notice" => "Aviso",
            "close" => "Fechar",
            "scroll_up" => "Subir",
            "cookie_text" => "Utilizamos cookies próprias e de terceiros para melhorar os nossos serviços. Se continuar a navegar, consideramos que aceita a sua utilização.",
            "cookie_more_info" => "Pode alterar a configuração ou obter mais informação em",
            "privacy_policy" => "Política de Privacidade",
            "accept" => "Aceitar",
            "cancel" => "Cancelar",
            "error_email_blank" => "- O correio eletrónico não pode estar vazio <br>",
            "error_email_invalid" => "- Correio eletrónico inválido <br>",
            "error_password_blank" => "- A palavra-passe não pode estar vazia <br>",
            "account_created_title" => "Conta criada com sucesso no <br> Neko Mailing",
            "good_work" => "Bom trabalho",
            "verify_email_text" => "Agora vamos verificar o seu endereço de email. Antes de mais, segurança.",
            "email_sent_text" => "Enviámos um email para o endereço fornecido. Depois de validado, poderá começar a sua campanha.",
            "problem_happened" => "Ocorreu um problema",
            "error" => "Erro",
            "existing_email" => "Email já existente",
            "email_not_found" => "Email inexistente",
            "send_error" => "Erro de envio.",
            "message_sent_thanks" => "A sua mensagem foi enviada. <br>Muito obrigado.",
            "confirm_email_subject" => "Email de registo",
            "confirm_email_preheader" => "Registo Neko Mailing",
            "confirm_email_registered" => "O seu endereço de email foi registado corretamente no Neko Mailing.",
            "confirm_email_intro" => "Para validar a sua conta e poder enviar campanhas, clique no botão seguinte.",
            "confirm_email_button" => "Confirmar",
            "confirm_email_ignore" => "Se não associou o seu endereço a uma conta Neko Mailing, ignore esta mensagem e não clique na ligação. <br><br><br> Se por alguma razão a ligação não funcionar, pode copiar e colar este endereço no seu navegador.<br><br>",
            "confirm_email_copy_notice" => "%s registou-se no Neko Mailing",
            "recovery_email_subject" => "Recuperação de palavra-passe",
            "recovery_email_intro" => "Esta é uma mensagem de recuperação de palavra-passe do Neko Mailing solicitada pelo utilizador.",
            "recovery_email_password_label" => "A palavra-passe solicitada é:",
            "recovery_email_panel_link" => "A ligação para aceder ao seu painel de utilizador é:",
            "recovery_email_thanks" => "Obrigado por confiar no Neko Mailing",
            "story_html_primary" => <<<'HTML'
<p><strong>Impulsione o seu coletivo com Neko Mailing, a plataforma de email marketing pensada para associações!</strong></p>
<p>Na <strong>Neko Mailing</strong> entendemos as necessidades específicas de coletivos e associações, por isso desenvolvemos uma plataforma que permite gerir a comunicação de forma centralizada e eficaz. Ajudamos a que os membros da sua associação estejam sempre informados e ligados.</p>
<p><strong>O que oferece a Neko Mailing à sua associação?</strong></p>
<ul>
<li><strong>Newsletters personalizadas</strong>: Crie boletins atrativos e adaptados aos interesses dos seus membros, mantendo-os a par das últimas novidades.</li>
<li><strong>Gestão centralizada</strong>: Administre as campanhas de todos os membros a partir de uma única plataforma, otimizando tempo e recursos.</li>
<li><strong>Segmentação avançada</strong>: Organize os seus subscritores por interesses, grupos ou atividades, enviando mensagens relevantes que geram mais impacto.</li>
<li><strong>Análise em tempo real</strong>: Meça o desempenho das suas campanhas com dados como taxas de abertura, cliques e conversões. Esta informação permite ajustar e melhorar as suas estratégias de comunicação.</li>
</ul>
HTML,
            "story_html_secondary" => <<<'HTML'
<p><strong>Com a Neko Mailing, o seu coletivo poderá:</strong></p>
<p><br />✔️ <strong>Fortalecer a comunidade interna</strong>, mantendo todos os membros informados.<br />✔️ <strong>Ampliar o alcance das suas iniciativas</strong> com campanhas que ligam a mais pessoas interessadas nas suas atividades.<br />✔️ <strong>Otimizar recursos</strong>, graças a uma plataforma intuitiva e pensada para associações.</p>
<p><strong>Faça crescer o impacto do seu coletivo com a Neko Mailing.</strong></p>
<p><br />Junte-se à plataforma líder em email marketing para associações e coletivos. Transforme a comunicação do seu grupo e potencie os seus resultados.</p>
<blockquote>
<p><strong>Descubra mais</strong> sobre como a Neko Mailing pode revolucionar a comunicação da sua associação.</p>
<p><strong>Comece hoje mesmo!</strong></p>
</blockquote>
HTML,
        ),
        "fr" => array(
            "portal_name" => "Newslettering pour les collectifs",
            "platform_label" => "Plateforme d'email marketing",
            "language_label" => "Langue",
            "email" => "Adresse e-mail",
            "password" => "Mot de passe",
            "enter" => "Entrer",
            "register" => "S'inscrire",
            "nav_login" => "Se connecter",
            "hero_eyebrow" => "Plateforme d'email marketing pour associations et collectifs",
            "hero_intro" => "Créez des newsletters, centralisez vos campagnes et gardez votre communauté connectée grâce à une expérience claire, élégante et prête à grandir.",
            "hero_primary" => "Créer un compte gratuit",
            "hero_secondary" => "Accéder au tableau de bord",
            "hero_signal" => "Un outil pensé pour les équipes qui doivent mieux communiquer, avec moins de friction et davantage de contrôle.",
            "metric_one" => "Communication centralisée",
            "metric_two" => "Segmentation intelligente",
            "metric_three" => "Résultats en temps réel",
            "story_intro" => "Tout le potentiel de votre communication, organisé avec une interface plus claire et plus visuelle.",
            "story_tag_one" => "Vue principale",
            "story_tag_two" => "Impact et croissance",
            "showcase_label" => "Design éditorial",
            "showcase_title" => "Une vitrine visuelle pour campagnes, newsletters et actions mises en avant.",
            "showcase_card_one" => "Campagnes avec identité",
            "showcase_card_two" => "Ressources visuelles",
            "login_kicker" => "Accès au tableau de bord",
            "login_title" => "Tout est prêt pour vous reconnecter et poursuivre votre prochaine campagne.",
            "login_text" => "Accédez à vos newsletters, statistiques et contacts depuis un environnement plus clair et plus direct.",
            "login_point_one" => "Récupérez vos campagnes précédentes et réutilisez les designs enregistrés.",
            "login_point_two" => "Consultez ouvertures, clics et résultats au même endroit.",
            "login_point_three" => "Gérez contacts, groupes et envois sans quitter le flux.",
            "forgot_text" => "Nous vous aidons à récupérer votre mot de passe pour revenir au tableau de bord sans attendre.",
            "register_kicker" => "Créer un compte",
            "register_title" => "Commencez avec un nouveau compte et validez votre e-mail pour activer votre espace.",
            "register_text" => "Configurez votre accès initial et commencez à concevoir vos campagnes en quelques étapes.",
            "register_point_one" => "Travaillez avec une plateforme prête à grandir avec votre équipe.",
            "register_point_two" => "Préservez votre identité visuelle dans chaque campagne.",
            "register_point_three" => "Organisez vos audiences et mesurez chaque envoi.",
            "back_home" => "Retour à l'accueil",
            "back_access" => "Retour à l'accès",
            "hello_again" => "Ravi de vous revoir !",
            "now_can_login" => "Vous pouvez maintenant vous connecter",
            "forgot_password" => "J'ai oublié mon mot de passe",
            "recovery_password" => "Récupération du mot de passe",
            "recovery_email_label" => "Pour récupérer votre mot de passe, indiquez votre e-mail",
            "send" => "Envoyer",
            "create_account_headline" => "Créez dès maintenant votre compte gratuit sur Neko Mailing !",
            "create_account_intro" => "Saisissez vos informations et vous pourrez lancer votre campagne sur <br> Neko Mailing",
            "legal_notice" => "Mentions légales",
            "notice" => "Avis",
            "close" => "Fermer",
            "scroll_up" => "Remonter",
            "cookie_text" => "Nous utilisons des cookies propres et de tiers pour améliorer nos services. Si vous continuez à naviguer, nous considérons que vous acceptez leur utilisation.",
            "cookie_more_info" => "Vous pouvez modifier la configuration ou obtenir plus d'informations dans",
            "privacy_policy" => "Politique de confidentialité",
            "accept" => "Accepter",
            "cancel" => "Annuler",
            "error_email_blank" => "- L'adresse e-mail ne peut pas être vide <br>",
            "error_email_invalid" => "- Adresse e-mail invalide <br>",
            "error_password_blank" => "- Le mot de passe ne peut pas être vide <br>",
            "account_created_title" => "Compte créé avec succès sur <br> Neko Mailing",
            "good_work" => "Bon travail",
            "verify_email_text" => "Nous allons maintenant vérifier votre adresse e-mail. Avant tout, la sécurité.",
            "email_sent_text" => "Nous avons envoyé un e-mail à l'adresse indiquée. Une fois validée, vous pourrez commencer votre campagne.",
            "problem_happened" => "Un problème est survenu",
            "error" => "Erreur",
            "existing_email" => "E-mail déjà existant",
            "email_not_found" => "E-mail inexistant",
            "send_error" => "Erreur d'envoi.",
            "message_sent_thanks" => "Votre message a été envoyé. <br>Merci beaucoup.",
            "confirm_email_subject" => "E-mail d'inscription",
            "confirm_email_preheader" => "Inscription Neko Mailing",
            "confirm_email_registered" => "Votre adresse e-mail a bien été enregistrée sur Neko Mailing.",
            "confirm_email_intro" => "Pour valider votre compte et pouvoir envoyer des campagnes, cliquez sur le bouton suivant.",
            "confirm_email_button" => "Confirmer",
            "confirm_email_ignore" => "Si vous n'avez pas associé votre adresse à un compte Neko Mailing, ignorez ce message et ne cliquez pas sur le lien. <br><br><br> Si pour une raison quelconque le lien ne fonctionne pas, vous pouvez copier et coller cette adresse dans votre navigateur.<br><br>",
            "confirm_email_copy_notice" => "%s s'est inscrit sur Neko Mailing",
            "recovery_email_subject" => "Récupération du mot de passe",
            "recovery_email_intro" => "Ceci est un message de récupération du mot de passe Neko Mailing demandé par l'utilisateur.",
            "recovery_email_password_label" => "Le mot de passe demandé est :",
            "recovery_email_panel_link" => "Le lien pour accéder à votre panneau utilisateur est :",
            "recovery_email_thanks" => "Merci de faire confiance à Neko Mailing",
            "story_html_primary" => <<<'HTML'
<p><strong>Donnez de l'élan à votre collectif avec Neko Mailing, la plateforme d'email marketing conçue pour les associations !</strong></p>
<p>Chez <strong>Neko Mailing</strong>, nous comprenons les besoins spécifiques des collectifs et des associations. C'est pourquoi nous avons développé une plateforme qui permet de gérer la communication de manière centralisée et efficace. Nous aidons les membres de votre association à rester informés et connectés en permanence.</p>
<p><strong>Que propose Neko Mailing à votre association ?</strong></p>
<ul>
<li><strong>Newsletters personnalisées</strong> : Créez des bulletins attrayants et adaptés aux intérêts de vos membres, en les tenant informés des dernières nouveautés.</li>
<li><strong>Gestion centralisée</strong> : Administrez les campagnes de tous les membres depuis une seule plateforme, en optimisant le temps et les ressources.</li>
<li><strong>Segmentation avancée</strong> : Organisez vos abonnés par intérêts, groupes ou activités et envoyez des messages pertinents qui génèrent davantage d'impact.</li>
<li><strong>Analyse en temps réel</strong> : Mesurez les performances de vos campagnes grâce à des données comme les taux d'ouverture, les clics et les conversions. Ces informations vous permettront d'ajuster et d'améliorer vos stratégies de communication.</li>
</ul>
HTML,
            "story_html_secondary" => <<<'HTML'
<p><strong>Avec Neko Mailing, votre collectif pourra :</strong></p>
<p><br />✔️ <strong>Renforcer la communauté interne</strong>, en gardant tous les membres informés.<br />✔️ <strong>Élargir la portée de vos initiatives</strong> grâce à des campagnes qui connectent davantage de personnes intéressées par vos activités.<br />✔️ <strong>Optimiser les ressources</strong>, grâce à une plateforme intuitive conçue pour les associations.</p>
<p><strong>Faites grandir l'impact de votre collectif avec Neko Mailing.</strong></p>
<p><br />Rejoignez la plateforme leader de l'email marketing pour associations et collectifs. Transformez la communication de votre groupe et boostez vos résultats.</p>
<blockquote>
<p><strong>Découvrez-en davantage</strong> sur la façon dont Neko Mailing peut révolutionner la communication de votre association.</p>
<p><strong>Commencez dès aujourd'hui !</strong></p>
</blockquote>
HTML,
        ),
    );

    return $catalog;
}

function public_home_text($key, $lang = null)
{
    $lang = public_home_resolve_language($lang);
    $catalog = public_home_catalog();
    if(isset($catalog[$lang][$key]) && $catalog[$lang][$key] !== "") {
        return $catalog[$lang][$key];
    }
    if(isset($catalog["es"][$key]) && $catalog["es"][$key] !== "") {
        return $catalog["es"][$key];
    }
    return $key;
}
