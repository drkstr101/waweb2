if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let u={};const a=e=>o(e,t),f={module:{uri:t},exports:u,require:a};s[t]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(i(...e),u)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/../public/android-chrome-192x192.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/android-chrome-512x512.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/apple-touch-icon.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/browserconfig.xml",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/favicon-16x16.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/favicon-32x32.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/favicon.ico",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-article.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-data-refresh.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-devices.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-menu.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-project.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/icon-servers.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/icons/users-lock.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/aaron-r-miller.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/adobestock_434934439.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/apple.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/auto_mode_black_48dp.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/background.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/bg.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/carla.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/cloud-illustration-indigo-400.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/desmond-eagle.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/dianne-ameter.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/expo.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/faster.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/favicon.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/ferenc-almasi-ayjnmg4oux4-unsplash.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/focused.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/gatsby.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/google-play.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero-1.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero-2.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero-3.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero-4.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero-enterprise.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hero.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hilary-ouse.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/hugh-saturation.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/icon.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/lock_black_48dp.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/logo-alt.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/logo-df8eda14.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/logo.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/logo.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/playstation.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-1.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-10.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-11.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-12.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-2.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-3.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-4.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-5.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-6.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-7.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-8.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/post-9.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/scale_black_48dp.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/scott-graham-5fnmwej4taa-unsplash.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/skype.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/smarter.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/users-lock.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/wa-card@4x.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/work-book-cover-2.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/work-book-cover-3.jpg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/xbox.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/images/zcool.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/manifest.json",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/mstile-150x150.png",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/safari-pinned-tab.svg",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/authcontainer.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/base.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/chrome-bug.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/components.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Black.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Black.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BlackIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BlackIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Bold.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Bold.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldCond.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldCond.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldCondIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldCondIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCn.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCn.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCnIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-BoldSemiCnIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Cond.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Cond.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-CondIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-CondIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-ExtraBold.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-ExtraBold.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-ExtraBoldIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-ExtraBoldIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-It.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-It.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Light.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Light.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-LightIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-LightIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Medium.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Medium.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Regular.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-Regular.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiCn.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiCn.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiCnIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiCnIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiLight.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiLight.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiLightIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeClean-SemiLightIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Black.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Black.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-BlackIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-BlackIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Bold.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Bold.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-BoldIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-BoldIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-It.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-It.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Medium.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Medium.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-MediumIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-MediumIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Regular.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-AdobeCleanSerif-Regular.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Black.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Black.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-BlackIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-BlackIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Bold.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Bold.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-BoldIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-BoldIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLight.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLight.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLightIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-ExtraLightIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-It.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-It.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Light.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Light.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-LightIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-LightIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Medium.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Medium.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-MediumIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-MediumIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Regular.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Regular.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Semibold.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-Semibold.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-SemiboldIt.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/fonts/subset-SourceCodePro-SemiboldIt.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/global.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/index.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/index.ts",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/nprogress.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/typography.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/../public/styles/utilities.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/0OWf-Xou7CZ5aqHJgQnQA/_buildManifest.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/0OWf-Xou7CZ5aqHJgQnQA/_middlewareManifest.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/0OWf-Xou7CZ5aqHJgQnQA/_ssgManifest.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/281.ff35f0952078a39d.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/390.b2611545bcb34496.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/425.c54e0185228a5796.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/507-7eb40330c8a1a65f.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/541.be2baa88b99cb6be.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/581.62284dd24fcc4fbc.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/631.1d1df950b721cef0.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/662.ee61148ffc13660f.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/716.a342c8f8b7ab5fe1.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/763.a480d7e3765b28af.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/797.da40a09058063bd0.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/947.cf20c58f7cf4c03b.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/commons.ad1192fdb8d53fc5.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/framework-72f19c736b33bfbf.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/main-170b27fea9225ec4.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/pages/%5B...slug%5D-127adb3dc815c077.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/pages/_app-c4b3307abf101af7.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/pages/_error-9ec226e1e9b3ed2c.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/pages/index-7b62cbc0e40d7ec4.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/chunks/webpack-4caad7d85a15deb0.js",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/css/945dd02b3932a9ab.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/css/adf0ac56a8008030.css",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Black.0de6f8b8.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Black.7fff1b45.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BlackIt.14882652.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BlackIt.b9a86359.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Bold.63798064.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Bold.f4617282.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldCond.af667111.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldCond.d0174a60.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldCondIt.4984515a.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldCondIt.a3f90b0a.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldIt.2c96a71e.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldIt.4a551dd0.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldSemiCn.5e4afdd9.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldSemiCn.e1172185.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldSemiCnIt.974575ba.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-BoldSemiCnIt.d498b5e8.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Cond.be421b7e.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Cond.e2dacb2e.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-CondIt.14e40c46.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-CondIt.88f93a6d.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-ExtraBold.bf8acaea.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-ExtraBold.f653892e.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-ExtraBoldIt.2d4994fd.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-ExtraBoldIt.96bbc3ac.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-It.171631a3.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-It.5924e41c.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Light.5303bca9.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Light.ed4abb28.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-LightIt.27ef8f9d.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-LightIt.78203a82.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Medium.5c21125a.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Medium.d62e38bf.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Regular.05ae5162.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-Regular.8ade5276.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiCn.7fdf80c7.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiCn.83c5a70b.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiCnIt.5d508a50.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiCnIt.d85c1837.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiLight.809a6d16.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiLight.cb02306e.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiLightIt.66178595.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeClean-SemiLightIt.69bb4f5d.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Black.1ecd7f66.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Black.6adb7443.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-BlackIt.045d72d1.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-BlackIt.78d89c6e.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Bold.5d9544b9.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Bold.d6f762cd.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-BoldIt.d9cf30a9.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-BoldIt.e0e6e27d.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-It.92319e5b.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-It.c0381e38.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Medium.6c4fd7a1.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Medium.91a476e5.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-MediumIt.4e4d53c7.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-MediumIt.a11e4d33.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Regular.28d77f91.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-AdobeCleanSerif-Regular.f14351d7.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Black.e0e8a678.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Black.e9b32bae.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-BlackIt.4c9831a2.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-BlackIt.783120c5.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Bold.9ac91d3a.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Bold.c16fccca.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-BoldIt.a375a8fa.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-BoldIt.e16f26f0.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-ExtraLight.1bd4515a.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-ExtraLight.9aa00f62.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-ExtraLightIt.88f5594a.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-ExtraLightIt.de82d5cb.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-It.5b08dd91.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-It.861f76fd.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Light.10e0567b.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Light.ca33de70.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-LightIt.0e866d2f.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-LightIt.6d87357c.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Medium.9e3af98e.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Medium.a8ee6e93.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-MediumIt.00c11d93.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-MediumIt.d6d9bb34.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Regular.4452cf8c.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Regular.ab806c05.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Semibold.23cbf258.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-Semibold.88539892.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-SemiboldIt.002fb45e.woff2",revision:"0OWf-Xou7CZ5aqHJgQnQA"},{url:"/_next/static/media/subset-SourceCodePro-SemiboldIt.ad70b451.woff",revision:"0OWf-Xou7CZ5aqHJgQnQA"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:o,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
