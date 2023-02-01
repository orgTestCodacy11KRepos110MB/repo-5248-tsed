/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "agenda.svg",
    "revision": "1cdb3ee54460e1b37b1a23fae0ffdb49"
  },
  {
    "url": "ajv_logo.png",
    "revision": "0eea34da468eeeeacb1203d940e9956d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "ef32096f0356bcc24fbb05923de934a8"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "3a696e8f3f93851050d8cf718dcbab79"
  },
  {
    "url": "apollo-graphql-1.svg",
    "revision": "9086960b926427485f6647fa421c677d"
  },
  {
    "url": "apollo-graphql-compact.svg",
    "revision": "393e9a672ee8cc3d6c93dcee8aa29e33"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2bd360921c440880ed011e5ce177d7b1"
  },
  {
    "url": "assets/fonts/boxicons.afbad0fa.eot",
    "revision": "afbad0fa2cbbb785e034ae3e3bb328ff"
  },
  {
    "url": "assets/fonts/boxicons.deea39cb.woff",
    "revision": "deea39cb9dc8b17f9d640014ca2f87af"
  },
  {
    "url": "assets/fonts/boxicons.f46ca69e.ttf",
    "revision": "f46ca69e63f9c5f080203c3f510b4110"
  },
  {
    "url": "assets/img/boxicons.ac68c5be.svg",
    "revision": "ac68c5bee58c439e4c2851555d41be8b"
  },
  {
    "url": "assets/img/client-controllers.6d7f6640.png",
    "revision": "6d7f6640fb5f9de3911e71b7634caecd"
  },
  {
    "url": "assets/img/hooks-in-sequence.c4f287f6.png",
    "revision": "c4f287f6e61aca7297cf49a55116100b"
  },
  {
    "url": "assets/img/invalid.41be58de.svg",
    "revision": "41be58deae51feff0d52b23ba55267bb"
  },
  {
    "url": "assets/img/middleware-in-sequence.b2978130.svg",
    "revision": "b2978130bdc2fbb8c92f888dcbe8bfc5"
  },
  {
    "url": "assets/img/middleware.0ddb812b.png",
    "revision": "0ddb812b6c3d3083902afed18cb4146b"
  },
  {
    "url": "assets/img/npm.68b58fb3.svg",
    "revision": "68b58fb3ec9c563fa1202fb343d3ba7e"
  },
  {
    "url": "assets/img/official.be85e546.svg",
    "revision": "be85e546a3f076756c6671ddfac0b43c"
  },
  {
    "url": "assets/img/providers.3d1881c2.png",
    "revision": "3d1881c2ed84ba491696de4958c386bf"
  },
  {
    "url": "assets/img/signin-page.e5cb5f7e.png",
    "revision": "e5cb5f7e90677a8f1f5633b737a1e740"
  },
  {
    "url": "assets/img/socketio.f76a6256.png",
    "revision": "f76a6256e475dd5e50524a65f64d87ce"
  },
  {
    "url": "assets/img/star.e7194b5b.svg",
    "revision": "e7194b5b7057b26406a5d0c9fc9707a8"
  },
  {
    "url": "assets/img/templating-engine.041778e2.png",
    "revision": "041778e2d51bbcd3b5ec1dcff0c6f955"
  },
  {
    "url": "assets/img/valid.36052327.svg",
    "revision": "360523273738006fb14d43ef3cc082ea"
  },
  {
    "url": "assets/js/10.c78d33eb.js",
    "revision": "b3922b281ac14754db3d437832134b1f"
  },
  {
    "url": "assets/js/11.044b2db0.js",
    "revision": "965b2ddb2d55fe74d73557f2ff2483e9"
  },
  {
    "url": "assets/js/12.bdd13099.js",
    "revision": "d57858dfed7431d018f8d410707d5564"
  },
  {
    "url": "assets/js/13.ef7326d2.js",
    "revision": "b9588ba754494bc8a901630cbe542dd5"
  },
  {
    "url": "assets/js/14.c1237013.js",
    "revision": "af8af9c67879a905744009aa8d10757b"
  },
  {
    "url": "assets/js/15.cc816840.js",
    "revision": "08caeef2085a33ff0b4985aecdaa0447"
  },
  {
    "url": "assets/js/16.cc59be22.js",
    "revision": "bc2cb3a37571087c1cd0c9a511376331"
  },
  {
    "url": "assets/js/17.8cd95507.js",
    "revision": "3a58dda0c28ee21051536e39efabbff3"
  },
  {
    "url": "assets/js/18.0f1155cf.js",
    "revision": "55365ddcdda79813a2581d0bca43b4c4"
  },
  {
    "url": "assets/js/19.31d059b8.js",
    "revision": "30d30e41c1ce0c15fa38219e6d222f20"
  },
  {
    "url": "assets/js/2.d56e5bb9.js",
    "revision": "549720af4e4c584ecfc65fbe9e74734b"
  },
  {
    "url": "assets/js/20.7e89c88a.js",
    "revision": "3395b61e041c9e96337bbb50416a18dd"
  },
  {
    "url": "assets/js/21.1cb42bc3.js",
    "revision": "4fe6805e2717bd5ce355c05cfd9295b4"
  },
  {
    "url": "assets/js/22.4201e9e0.js",
    "revision": "2c2da675834ef6cd37ef15b02ab890a9"
  },
  {
    "url": "assets/js/23.3fc8eeb5.js",
    "revision": "dbf5b726926d56add69f2ffec3aea36d"
  },
  {
    "url": "assets/js/24.1f9c2908.js",
    "revision": "cdcbd021e577d10a7133d3e2c95168af"
  },
  {
    "url": "assets/js/25.ef5a0c95.js",
    "revision": "48910030e16db87271197a188b33bb04"
  },
  {
    "url": "assets/js/26.f097c6a1.js",
    "revision": "4c4e05541b728aad979e7e1d17728c9a"
  },
  {
    "url": "assets/js/27.f0d7a4bd.js",
    "revision": "974be360d5c9fde3d97a8de48cb155e0"
  },
  {
    "url": "assets/js/28.b5ff6d8b.js",
    "revision": "0b225ab5e555d3275ed12dc35431876e"
  },
  {
    "url": "assets/js/29.4e268cdf.js",
    "revision": "c1daa69a68db1f30d47bf872d165f7f6"
  },
  {
    "url": "assets/js/3.8e6ab67f.js",
    "revision": "8dd9ac3003b097bb17c62fbae503099d"
  },
  {
    "url": "assets/js/30.18822c02.js",
    "revision": "333c886efbddcea8a2997e8b8ed2aca2"
  },
  {
    "url": "assets/js/31.e71de327.js",
    "revision": "71856339be1ddc5b31f2174ad4b7f07e"
  },
  {
    "url": "assets/js/32.5c0e3555.js",
    "revision": "a3e119cbe7757a570ebe074c4511af32"
  },
  {
    "url": "assets/js/33.28dd39b3.js",
    "revision": "a75fba7f4e0ffe54262d0c3ea82150e6"
  },
  {
    "url": "assets/js/34.eb86d7fd.js",
    "revision": "6956e3f7049c426f2f2937713489bfda"
  },
  {
    "url": "assets/js/35.aed5be2b.js",
    "revision": "1581ca290f0afa9435a63a34d895c8ae"
  },
  {
    "url": "assets/js/36.de213006.js",
    "revision": "597c8f2c803d5d1696281955100f25b0"
  },
  {
    "url": "assets/js/37.ee6f0b64.js",
    "revision": "16a085362023e1e59587d4a7972d22bb"
  },
  {
    "url": "assets/js/38.cb3468a3.js",
    "revision": "81d66e7170c4fcf120b98bdf474ba85f"
  },
  {
    "url": "assets/js/39.37eda91e.js",
    "revision": "7de288d968961cdc35af695427b95b1a"
  },
  {
    "url": "assets/js/4.e40363b2.js",
    "revision": "ba92447feda1a6399a25b81ceeca1ff0"
  },
  {
    "url": "assets/js/40.224de125.js",
    "revision": "e444d39e37a749a91bcb72b8a7ac6ae2"
  },
  {
    "url": "assets/js/41.4feac417.js",
    "revision": "bffcf20f72804f1f9d677628f723ae4f"
  },
  {
    "url": "assets/js/42.4529afb6.js",
    "revision": "6bf20f5418a001596d191a469592efa3"
  },
  {
    "url": "assets/js/43.1cd54335.js",
    "revision": "5b65a13448e7d86d45041a42fdbd8657"
  },
  {
    "url": "assets/js/44.079c8afe.js",
    "revision": "d84d0befefd5fc9823e0a201b108ee2e"
  },
  {
    "url": "assets/js/45.b7e82803.js",
    "revision": "6f83474ef82f3b4cc8a35ceee7f5f412"
  },
  {
    "url": "assets/js/46.0cd25da6.js",
    "revision": "d1635b6c532b2d22a156f65ed458c956"
  },
  {
    "url": "assets/js/47.d5680cb7.js",
    "revision": "2c72a4c38769667db01b62df2d608680"
  },
  {
    "url": "assets/js/48.04950fb7.js",
    "revision": "78cec522cfbbaec7d5b74aedaaf8d7fd"
  },
  {
    "url": "assets/js/49.71f75319.js",
    "revision": "af57552b03984a67ff29ed1cebd70509"
  },
  {
    "url": "assets/js/5.897add6c.js",
    "revision": "eedde28ba0103c5994bbaba24ae9d55f"
  },
  {
    "url": "assets/js/50.5c1e57b4.js",
    "revision": "b8f19eba72160fb37ca35fde8c16dfd2"
  },
  {
    "url": "assets/js/51.bf3e3242.js",
    "revision": "a53f364c536c7db09707a084dcfb226a"
  },
  {
    "url": "assets/js/52.d531bcde.js",
    "revision": "d0c1c0572f80e94141b5d5786d79bbba"
  },
  {
    "url": "assets/js/53.8fc8d7d2.js",
    "revision": "4ae7263119a8c91b926319961fe1e63a"
  },
  {
    "url": "assets/js/54.39c96f6c.js",
    "revision": "79a0bf05b9a6662da1b5db1662080bb7"
  },
  {
    "url": "assets/js/55.1a874925.js",
    "revision": "977d197dcf604c03310848d1172035c2"
  },
  {
    "url": "assets/js/56.37496373.js",
    "revision": "73e8b6a880f9d12005ea894480d791f5"
  },
  {
    "url": "assets/js/57.70155923.js",
    "revision": "e1022914f6742b598f0b17e7692522a0"
  },
  {
    "url": "assets/js/58.ee46ffa3.js",
    "revision": "b3b0bc8eb52a8600e6a4ca0e587e084f"
  },
  {
    "url": "assets/js/59.b0bb6aad.js",
    "revision": "aaa348556fb5fc76a7c151a66a91dadb"
  },
  {
    "url": "assets/js/6.2413a0ef.js",
    "revision": "aa29ce9e0d35e2b95e45a13ae1ea4257"
  },
  {
    "url": "assets/js/60.7681a060.js",
    "revision": "bf155f1c17d8f5c328b6c28674f47458"
  },
  {
    "url": "assets/js/61.370c9e95.js",
    "revision": "8d9ef082dfeae880f9ce5db8b24be52c"
  },
  {
    "url": "assets/js/62.2d80271e.js",
    "revision": "339ecf8acd0c18f59523aef49ceacf37"
  },
  {
    "url": "assets/js/63.4e6a756f.js",
    "revision": "5726613807a0616e5bc0dd44db7b39d6"
  },
  {
    "url": "assets/js/64.eac25871.js",
    "revision": "e72c0adc6afa8c7ff941fb9b68338232"
  },
  {
    "url": "assets/js/65.a89a64b3.js",
    "revision": "b0877f9dfa687b5135c1cd1a361e3208"
  },
  {
    "url": "assets/js/66.9ad76cf3.js",
    "revision": "d9ae04067984bc2be850549022f975f4"
  },
  {
    "url": "assets/js/67.895099fe.js",
    "revision": "3df1898048223e54ce3ac26cbfa1c72f"
  },
  {
    "url": "assets/js/68.60934577.js",
    "revision": "2c4d62f7ae1576ae1fbcb2495ee5ab65"
  },
  {
    "url": "assets/js/69.2ad22d6f.js",
    "revision": "2b6f1a0d12339c23f4cb198035507e68"
  },
  {
    "url": "assets/js/7.97509e58.js",
    "revision": "12bfe508b534292f8a625c2937fcfd5d"
  },
  {
    "url": "assets/js/70.1baef6fe.js",
    "revision": "90155a38f067958780e8050140983f13"
  },
  {
    "url": "assets/js/71.1d3846f8.js",
    "revision": "d9b1173f9305602ce18d70b981ab50c7"
  },
  {
    "url": "assets/js/72.40f95c79.js",
    "revision": "22e6f05694a5caee74faac407634742f"
  },
  {
    "url": "assets/js/73.eeb53adc.js",
    "revision": "46c89cb856b937a624d4df197607b53e"
  },
  {
    "url": "assets/js/74.98aaaf17.js",
    "revision": "a3804d124e29a2379b8c70545eee7e1c"
  },
  {
    "url": "assets/js/75.2162714f.js",
    "revision": "315a6a7a6d7bcbdfdd0b604ae54246be"
  },
  {
    "url": "assets/js/76.5577374e.js",
    "revision": "c0a97aa60ebb817c80d4ca68046c6129"
  },
  {
    "url": "assets/js/8.30cb238a.js",
    "revision": "e2ac2ef6e0d225351d8afbc61fccac45"
  },
  {
    "url": "assets/js/9.3f241e44.js",
    "revision": "4b46d0cd179dc469db9083945f7b3b0c"
  },
  {
    "url": "assets/js/app.25f79cfa.js",
    "revision": "3930d97b6517ac5186a3b19d3ccd2e54"
  },
  {
    "url": "aws.png",
    "revision": "0c234b5d57f00ca68dfb3b3cfc5e8f51"
  },
  {
    "url": "azure.png",
    "revision": "2ab4ccd7a23e22b54e90ddbda5f7e480"
  },
  {
    "url": "babel.svg",
    "revision": "1441142edc8c8eb20f1a38bf22fb26e8"
  },
  {
    "url": "bg.svg",
    "revision": "627266770d0e7f34fa0a178513013a52"
  },
  {
    "url": "codesanbox.svg",
    "revision": "4b5fd814b19006c77a916e84ddea5732"
  },
  {
    "url": "codesandbox.svg",
    "revision": "7aaaef45844803b13cab0883c05d09b1"
  },
  {
    "url": "configuration.html",
    "revision": "144a25e45ba88136c2e2342a2af978b0"
  },
  {
    "url": "contributing.html",
    "revision": "58c97483e99092741f90eb5f6882fcd5"
  },
  {
    "url": "docs/authentication.html",
    "revision": "a02dd7bd0577ea1d1dbc2441aa688ba2"
  },
  {
    "url": "docs/cache.html",
    "revision": "14678208fd12b34610bfc3a0eb6c25a5"
  },
  {
    "url": "docs/command.html",
    "revision": "0917ff462faac94871bed503363f029d"
  },
  {
    "url": "docs/configuration.html",
    "revision": "adedd4ea8d4e104cfdd00df0e1343cdf"
  },
  {
    "url": "docs/converter.html",
    "revision": "f604d03504a9f93d2f91c1dd562e3306"
  },
  {
    "url": "docs/exceptions.html",
    "revision": "4034d86857c92551f318a6ab44bb94c7"
  },
  {
    "url": "docs/factory.html",
    "revision": "026af20f531add5ddceb6dd6159ca330"
  },
  {
    "url": "docs/hooks.html",
    "revision": "043990d17df0117c060d71ad2753ba70"
  },
  {
    "url": "elastic-logstash.svg",
    "revision": "39e646a7f5e6fc7cf9e57502a11e77b1"
  },
  {
    "url": "express.png",
    "revision": "177bb6f67c4d179bc2145b206f751fd7"
  },
  {
    "url": "expressjs.svg",
    "revision": "91157328ea3140cff26e66386d673998"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4cf47eff0c0d0d7c1a1eca0593bd4508"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "67207fa4b833919cd8e16af9d1e62733"
  },
  {
    "url": "getting-started/cli-selected-features.png",
    "revision": "4606aca078eaa020e89aa7b204ff51db"
  },
  {
    "url": "getting-started/migration-workflow.png",
    "revision": "f5b2334a39cac925d999570f210446a9"
  },
  {
    "url": "getting-started/server-start.png",
    "revision": "6e8f62a51aec9106afd4c316fb496e3e"
  },
  {
    "url": "graphql.svg",
    "revision": "6270a2d4757a839d4653c02f3db32e2f"
  },
  {
    "url": "hero-bg.svg",
    "revision": "86a81d807a0434005e193f16ecab9298"
  },
  {
    "url": "ioredis.svg",
    "revision": "0460cb8db3e30ae96d00f9d4f82dd029"
  },
  {
    "url": "jest.svg",
    "revision": "131690707f4bef04f0fda37cf3ec6ef5"
  },
  {
    "url": "keycloak_icon.svg",
    "revision": "551d4a112f4544564b7b5d0ad652b5c2"
  },
  {
    "url": "keycloak.svg",
    "revision": "f50bd48e8aaf5f7f9d4578c0054e5160"
  },
  {
    "url": "koa.svg",
    "revision": "62af385028c883ad8d31da5aae232ac7"
  },
  {
    "url": "logentries.svg",
    "revision": "c2b01b56058d4d8642d6bc1ac2d445ac"
  },
  {
    "url": "loggly.svg",
    "revision": "e714a8ff3baf7e366246769e6b727b3e"
  },
  {
    "url": "meetup.png",
    "revision": "4a524099d42afcea50615302d9877c6b"
  },
  {
    "url": "mochajs.svg",
    "revision": "0493ae31c60109eadf99e902b2711bf7"
  },
  {
    "url": "mongoose.png",
    "revision": "baad9b475e92ad28a84e1c40a38fd551"
  },
  {
    "url": "nexus.png",
    "revision": "37d830678140b080ad13a1e997b0c0c5"
  },
  {
    "url": "our-team.png",
    "revision": "18ee30a2e0dd427260def769f7961225"
  },
  {
    "url": "package.svg",
    "revision": "2b5870d739dfe062a4e4ebb8061e102e"
  },
  {
    "url": "partners/artips.png",
    "revision": "60e537b48744da2822063020756a95da"
  },
  {
    "url": "partners/schnell.svg",
    "revision": "da6070c91af67360f90bb1f004e0e461"
  },
  {
    "url": "passportjs.png",
    "revision": "3c4e380e6c0da1da329b6d780f543125"
  },
  {
    "url": "prisma-2.png",
    "revision": "722446ffb492c2e357a12c78f07ff0bc"
  },
  {
    "url": "prisma-2.svg",
    "revision": "ece734638af321cb392e377d43a632e3"
  },
  {
    "url": "prisma-3.svg",
    "revision": "973b701601ce879e4880a88d218a7248"
  },
  {
    "url": "rabbitmq.svg",
    "revision": "0e43817b743528cfac9f67ad36fb0b35"
  },
  {
    "url": "rapid7.svg",
    "revision": "268047f0fbe17dac944e5648544d8134"
  },
  {
    "url": "react.png",
    "revision": "1e9d10a77c464d818e7c6cd3c5a3f259"
  },
  {
    "url": "screens/opencollective-tiers.png",
    "revision": "55d24c1bd8b74a097c7e2f67619cd17b"
  },
  {
    "url": "serverless.png",
    "revision": "52572b708bd3c2e46a221e157e9debdb"
  },
  {
    "url": "serverless.svg",
    "revision": "832bb3164714db34fc2480a09ed8b0f6"
  },
  {
    "url": "slack.svg",
    "revision": "4db20049c6e466d3d4b34bbc7b6edc3e"
  },
  {
    "url": "socket-io.png",
    "revision": "4cb9ecf17526b09e164702939c0018d0"
  },
  {
    "url": "socketio.png",
    "revision": "fba517c4c075d458b826f2bac55c41e8"
  },
  {
    "url": "socketio.svg",
    "revision": "5dc4ade3acf6b3836ab45becc3d07fef"
  },
  {
    "url": "sponsors.svg",
    "revision": "3cd1255c162104e46a0f046a301554b6"
  },
  {
    "url": "stripe.svg",
    "revision": "2d7f562527f8630a7f0eb4a9fbd71324"
  },
  {
    "url": "swagger.svg",
    "revision": "ee5300f60d0ba789478ec58a5349d10d"
  },
  {
    "url": "tsed-og.png",
    "revision": "04d5349862d2a9c8325ab2c330aa9c86"
  },
  {
    "url": "tsed.png",
    "revision": "bcd670cd3906e592683e60465feab493"
  },
  {
    "url": "typegraphql.png",
    "revision": "bec26ca21b76b18a76253d8df2ca1db3"
  },
  {
    "url": "typeorm.png",
    "revision": "c3f8c53e67ffb9100ddc47f14adb5b10"
  },
  {
    "url": "typescript.png",
    "revision": "dcb5077d586b4dc51b40a03d760c18af"
  },
  {
    "url": "vuejs.png",
    "revision": "1906510af222740d24066f8f02ec8909"
  },
  {
    "url": "webpack.svg",
    "revision": "9cf70b1acb9c5a67d656085ec29fbf3f"
  },
  {
    "url": "zenika.png",
    "revision": "f7aa5b93b25d17094b972ee05c366825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
