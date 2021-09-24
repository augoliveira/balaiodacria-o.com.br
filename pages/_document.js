import Document, { Html, Head, Main, NextScript } from 'next/document'
const APP_NAME = 'Agência Balaio da criação'
const APP_DESCRIPTION = 'Balaio da Criação | Agência especializada em Marketing Digital.'
import { GA_TRACKING_ID } from '../lib/gtag'
import { FB_PIXEL_ID } from '../lib/fpixel'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <style>{
            `
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `
          }</style>

<link rel='apple-touch-icon' href='/static/icons/touch-icon-iphone.png' />
<link rel='apple-touch-icon' sizes='152x152' href='/static/icons/touch-icon-ipad.png' />
<link rel='apple-touch-icon' sizes='180x180' href='/static/icons/touch-icon-iphone-retina.png' />
<link rel='apple-touch-icon' sizes='167x167' href='/static/icons/touch-icon-ipad-retina.png' />

<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
<link rel='manifest' href='/static/manifest.json' />
<link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
<link rel='shortcut icon' href='/favicon.ico' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     

<meta name='twitter:title' content='Balaio da Criação' />
<meta name='twitter:description' content='Balaio da Criação | Agência especializada em Marketing Digital.' />
<meta name='twitter:creator' content='@Aug_oliver' />
<meta property='og:type' content='website' />
<meta property='og:title' content='Balaio da criação' />
<meta property='og:description' content='Balaio da Criação | Agência especializada em Marketing Digital.' />
<meta property='og:site_name' content='Balaio da criação' />
<meta property='og:url' content='https://balaiodacriacao.com.br' />


<link rel='apple-touch-startup-image' href='/static/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/static/images/apple_splash_640.png' sizes='640x1136' />

                <title>
                Balaio da Criação | Agência especializada em Marketing Digital.
                </title>
                <meta name="description" content="Somos um cesto de ideias onde criatividade, arte, cultura e qualidade se misturam. Reunimos o melhor da tecnologia e design para produzir conteúdos de qualidade, gerar experiência diferenciada para os clientes e alcançar os melhores resultados para seus."/>
                <meta name="keywords" content=" Somos um cesto de ideias onde criatividade, arte, cultura e qualidade se misturam. Reunimos o melhor da tecnologia e design para produzir conteúdos de qualidade, gerar experiência diferenciada para os clientes e alcançar os melhores resultados para seus."/>
                
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />

                <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome-all.min.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/zimed-icon.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/style2.css" />
                <link rel="stylesheet" href="css/font-awesome.css" />
    <link rel="stylesheet" href="/assets/css/flaticon.css" />
    <link rel="stylesheet" href="/assets/css/slick.css"/>
    <link rel="stylesheet" href="/assets/css/slick-theme.css" />
    <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
    <link rel="stylesheet" href="/assets/style.css" />
    <link rel="stylesheet" href="/assets/css/royal-preload.css" />
                
                <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/plugins.min.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/webfonts.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/color.css" />
                <link rel="stylesheet" href="assets/css/revolution/settings.css" />
                <link rel="stylesheet" href="assets/css/revolution/navigation.css" />
                {/* <link rel="shortcut icon" href={favicon} /> */}
                <link rel="stylesheet" type="text/css" href="your_website_domain/css_root/flaticon.css"/>
                {/* Global Site Code Pixel - Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KXNXG3Z"></script>
        </Head>
        <script async src="https://integrazap.com.br/gadget-v.1/wapp-flutuante.js?x=318391f35f10fb6337773b6ef8be8044&y=96754498797&z=balaiodacriacao.com.br"></script>
        <body>
          <Main />
          <NextScript />
          
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/plugins.min.js"></script>
    <script src="assets/js/part-int3.js"></script>
    <script src="assets/js/custom-scripts.js"></script>
    <script src="assets/js/revolution/jquery.themepunch.tools.min.js"></script>
    <script src="assets/js/revolution/jquery.themepunch.revolution.min.js"></script>

    
    <script src="assets/js/revolution/extensions/revolution.extension.actions.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.carousel.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.kenburn.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.migration.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.navigation.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.parallax.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.slideanims.min.js"></script>
    <script src="assets/js/revolution/extensions/revolution.extension.video.min.js"></script>
    <script src="assets/js/revolution/revolution-init.js"></script>

        </body>
      </Html>
    )
  }
}
