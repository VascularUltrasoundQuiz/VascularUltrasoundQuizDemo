'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0cf517afde5d90e2d97787eb45230552",
"index.html": "e8dd8c4d5f30c1e9c70367c8f1f5671e",
"/": "e8dd8c4d5f30c1e9c70367c8f1f5671e",
"main.dart.js": "fbfeae327bd36c0b81e13aab1c922a63",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "335780e58bae02d6e06737c7f7fc08fa",
"icons/Icon-192.png": "e611110332ffafb0abe913b0ca0de849",
"icons/Icon-maskable-192.png": "f3a369ad3c909b02b41a33cc7606c11e",
"icons/Icon-maskable-512.png": "89188f62445d1ec9b799c1a4cb011835",
"icons/Icon-512.png": "da7e6417dd576a95b98ef603a3ab6a2a",
"manifest.json": "347aa348a73943533d8d468539173a61",
"assets/AssetManifest.json": "954b477326696bcd3539a57cbad9457f",
"assets/NOTICES": "ae781ba20654253a9cbb63fdf2fc1a56",
"assets/FontManifest.json": "0775618b35846b73af473767e9d35103",
"assets/AssetManifest.bin.json": "16038206e66c6fc7c65d0158571dcf31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/packages/rich_editor/assets/editor/rich_text_editor.js": "721b10824c41b95096cf8d17bf2060fa",
"assets/packages/rich_editor/assets/editor/interact.min.js": "15f08c5f4b5f988ea5d4973c08e146c2",
"assets/packages/rich_editor/assets/editor/editor.html": "8c10bd81bcca4b91b352773aeca06827",
"assets/packages/rich_editor/assets/editor/style.css": "f665c7a648f0189794176aa8cab28f6a",
"assets/packages/rich_editor/assets/editor/platform_style.css": "8c60cbb7472dad1bbceee9e1abf2e3d1",
"assets/packages/rich_editor/assets/editor/normalize.css": "1e4f1b9133d9ae6468c84fa5cd82c921",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/hyphenatorx/test/Roboto-Regular.ttf": "afe8eacfc0903cc0612dc696881f0480",
"assets/packages/hyphenatorx/assets/language_id.json": "f13ed90293f4759c31b711d6aa12d112",
"assets/packages/hyphenatorx/assets/language_zh_latn_pinyin.json": "0573cdf79d552dd0cec5b08e4e5c0cc3",
"assets/packages/hyphenatorx/assets/language_as.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_da.json": "120cd341e7b9582160fa1864b0e74607",
"assets/packages/hyphenatorx/assets/language_af.json": "28351132e29a4511c32916f6e95d20ec",
"assets/packages/hyphenatorx/assets/language_mn_cyrl.json": "cdc092042cea8027a762702578ff5477",
"assets/packages/hyphenatorx/assets/language_kmr.json": "e6fc99875809b0cd60763dd3cb956547",
"assets/packages/hyphenatorx/assets/language_lv.json": "4972684b7c56349e81e0d0092f2bf88b",
"assets/packages/hyphenatorx/assets/language_mul_ethi.json": "e1d9121676a508f1186e1a51c9510ca9",
"assets/packages/hyphenatorx/assets/language_te.json": "aab19b4ed89174a98527126f4c8f5278",
"assets/packages/hyphenatorx/assets/language_de_1996.json": "6a166052a23eb375b4c25e323e9089ed",
"assets/packages/hyphenatorx/assets/language_cs.json": "c6beadc7b7ef04593018ec84b43106bb",
"assets/packages/hyphenatorx/assets/language_nb.json": "d9a86ca6b22c640f446c7b29d9533a79",
"assets/packages/hyphenatorx/assets/language_sh_cyrl.json": "2d6190383adddee8216db3ae6a6a803e",
"assets/packages/hyphenatorx/assets/language_nn.json": "ad703f572cbdc2951ace902f31021c65",
"assets/packages/hyphenatorx/assets/language_sv.json": "e96a74ac989f945a532519c09ddeb8a5",
"assets/packages/hyphenatorx/assets/language_th.json": "81a169edd244703cd2e0c1fe5c42502b",
"assets/packages/hyphenatorx/assets/language_es.json": "879a7b1392bdef59a1690765b9fefdff",
"assets/packages/hyphenatorx/assets/language_ga.json": "b7500e754a15e0dd6a673ed8974ff639",
"assets/packages/hyphenatorx/assets/language_fr.json": "92bf3f19cb4d2bb2862fb7f478b7a169",
"assets/packages/hyphenatorx/assets/language_et.json": "ef1082d6d2a9e8c9f3e364b25ee54ee6",
"assets/packages/hyphenatorx/assets/language_cy.json": "d99fadaee445724bf24c78149f3c14c4",
"assets/packages/hyphenatorx/assets/language_kn.json": "295d3717aae5e668f88ad73e367b425f",
"assets/packages/hyphenatorx/assets/language_hsb.json": "1c810859645ad347733939a53e4eecf4",
"assets/packages/hyphenatorx/assets/language_eu.json": "f95aa286d216c74f6c1bd020e23a6a80",
"assets/packages/hyphenatorx/assets/language_gl.json": "f867ce63a47135031212ed4b314b5b1b",
"assets/packages/hyphenatorx/assets/language_gu.json": "1aaad8f7c610501f8e3afed18de7a865",
"assets/packages/hyphenatorx/assets/language_ca.json": "c9031d91386a3a29df196db082dd4c4a",
"assets/packages/hyphenatorx/assets/language_hi.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_bg.json": "53cfe5471051d7148f8ce3ab7c39f415",
"assets/packages/hyphenatorx/assets/language_de_ch_1901.json": "c5951052fb095c90db9a6844c31277db",
"assets/packages/hyphenatorx/assets/language_ro.json": "cad16d9be24633726f4c546f89752043",
"assets/packages/hyphenatorx/assets/language_eo.json": "d64fcffc1b960c7f9fdf01dfb1967ef0",
"assets/packages/hyphenatorx/assets/language_ta.json": "7ad8015adba2d581dad1d0bd9a37de4d",
"assets/packages/hyphenatorx/assets/language_uk.json": "59e4e985ee5e1b55c6261cf207543050",
"assets/packages/hyphenatorx/assets/language_ru.json": "ee7ba571494729f6730ac42d29f1ddf9",
"assets/packages/hyphenatorx/assets/language_pl.json": "465eb8b4886d611a78c4d637816aa747",
"assets/packages/hyphenatorx/assets/language_pms.json": "9edb405668d8786e1d4318a3e6a18126",
"assets/packages/hyphenatorx/assets/language_fi.json": "984fa6c4c8d432224468d3a2e9479ccc",
"assets/packages/hyphenatorx/assets/language_grc.json": "6a7e746a8a45e7c3ec3f155e1027c653",
"assets/packages/hyphenatorx/assets/language_ia.json": "4fd10dfc676dd12813255cfdbd10160c",
"assets/packages/hyphenatorx/assets/language_hr.json": "c47afa087612fcec9b03e359ecba21c9",
"assets/packages/hyphenatorx/assets/language_it.json": "818ab0c9a1a3dcd1616078901418030b",
"assets/packages/hyphenatorx/assets/language_pt.json": "783fb19ab0b5c6c74900a641be956a7b",
"assets/packages/hyphenatorx/assets/language_rm.json": "10dcdf08d92a0b32b168eaa0453faf3c",
"assets/packages/hyphenatorx/assets/language_la_x_classic.json": "ab126029009d7641218aaea72fe86d14",
"assets/packages/hyphenatorx/assets/language_cop.json": "6e473484979b4f998316355c83acfe36",
"assets/packages/hyphenatorx/assets/language_sk.json": "03a6f38dd4e0c47946c1cc4d225b2b35",
"assets/packages/hyphenatorx/assets/language_ml.json": "1b34f0a9b12c9a155f419473c1e5650b",
"assets/packages/hyphenatorx/assets/language_pa.json": "9ed942ab0486b9522b56db118ec0fb44",
"assets/packages/hyphenatorx/assets/language_ka.json": "6c3fc528796096ce2ca3a7ec5543069a",
"assets/packages/hyphenatorx/assets/language_is.json": "eec6ce02aa68c8917a557a9d11e485d3",
"assets/packages/hyphenatorx/assets/language_mn_cyrl_x_lmc.json": "20a0ad88ddcaf7551b2845e74b018070",
"assets/packages/hyphenatorx/assets/language_lt.json": "193c8ed815fda87ec76e550beb2c6b13",
"assets/packages/hyphenatorx/assets/language_mr.json": "3707f93e40200953d59cddb0e3b477b8",
"assets/packages/hyphenatorx/assets/language_tk.json": "460bb1d91f8e41b5c6a5fe5668074dc3",
"assets/packages/hyphenatorx/assets/language_hu.json": "a21372487888973207c8b9b6700b2270",
"assets/packages/hyphenatorx/assets/language_el_monoton.json": "d0aab2d432c3891039ecb2bcaa172bc9",
"assets/packages/hyphenatorx/assets/language_el_polyton.json": "38c019caffe09b4c9555bd4bdac9c1a2",
"assets/packages/hyphenatorx/assets/language_bn.json": "435b4ca98e1d08b328a76dca57518991",
"assets/packages/hyphenatorx/assets/language_la.json": "a841100589d9500afbd41f9aaac78c19",
"assets/packages/hyphenatorx/assets/language_hy.json": "fc7ed76ad3ac4dbec9492d520c87ef0a",
"assets/packages/hyphenatorx/assets/language_en_us.json": "218751cee7b6d50fcdc76671639b1f59",
"assets/packages/hyphenatorx/assets/language_en_gb.json": "37cef53e88a438af9fcc0c9c39f77d71",
"assets/packages/hyphenatorx/assets/language_or.json": "0d577fbc142e3d37474d4f6ae1be1d00",
"assets/packages/hyphenatorx/assets/language_sl.json": "2e1f16dc4243cfb69147858ad4d9a15b",
"assets/packages/hyphenatorx/assets/language_fur.json": "5cb194c03480526b59d399c92c851b35",
"assets/packages/hyphenatorx/assets/language_tr.json": "768a6e3a51913f04387ffb73cddcdc37",
"assets/packages/hyphenatorx/assets/language_de_1901.json": "a0bd6a5e3079be7f61bff91bf26887d3",
"assets/packages/hyphenatorx/assets/language_sa.json": "3f75df9404ef3fcfd4028517f1808f04",
"assets/packages/hyphenatorx/assets/language_nl.json": "2d4b858e6f31e3931e23c325496dc683",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "83e8fb445315207331c79cf9b6db68a4",
"assets/fonts/MaterialIcons-Regular.otf": "ac62c8c18408287ad193b83cd46f982b",
"assets/assets/thumbs-down.png": "506b9568cc5813481cece0c4c7f27d96",
"assets/assets/Logo_Background_Demo.png": "7b7fffb5f83ad1bb02c070765f61fbfc",
"assets/assets/Quizfragen_Bilder/1_Basics/8.png": "0d9cbdd6a556c1d889659701f78c0001",
"assets/assets/Quizfragen_Bilder/1_Basics/4.jpg": "a98a26e58d69e07992ddb1a1460d8573",
"assets/assets/Quizfragen_Bilder/1_Basics/5.jpg": "ae7afae14e691f6bc83af3f68a0d0fce",
"assets/assets/Quizfragen_Bilder/1_Basics/7.jpg": "3d7824bfac624a9a7d2f641fb6e1ed17",
"assets/assets/Quizfragen_Bilder/1_Basics/6.png": "72da14decd729ea6232a1672e6ba4f0b",
"assets/assets/Quizfragen_Bilder/1_Basics/2.png": "88a984ab2a9d1736393e655bdefa6d8b",
"assets/assets/Quizfragen_Bilder/1_Basics/3.png": "d107ca50d69e09c7d1b0d42b35b2fcb8",
"assets/assets/Quizfragen_Bilder/1_Basics/1.jpg": "e1a6063dd8282b76cae8409242ba9bb9",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/8.png": "77537a6310b40945da25974205be26dc",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/9.png": "2c86260a05095a94a2bc96303c5b19cd",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/12.jpg": "088c98046a3fdf4bf4a8f1e5f81e48d6",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/11.png": "41806f536acf20c722fa371c55343fda",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/10.jpg": "5c4f36c07d11ba922f2ca17e68efe306",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/4.jpg": "09024c977cf7dde8355d35f8a568824e",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/5.png": "c41ee77d37f2a3544b5645f4f738e09b",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/7.jpg": "3cf6756cac6a6393f610363002984eba",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/6.jpg": "093f333f3652e9a6721025632488c1d9",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/2.jpg": "cee6b21e6b3d92e7d1886a85eb73f8f6",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/3.jpg": "33edfb7c4760bbda22ed04c18c866444",
"assets/assets/Quizfragen_Bilder/2_Normalbefunden_von_Arterien/1.jpg": "a43d82a734007cc604ce80e95bb491bf",
"assets/assets/Quizfragen_Bilder/3_Normalbefunden_von_Venen/4.png": "055e402ed764c604a1f5bb5644450435",
"assets/assets/Quizfragen_Bilder/3_Normalbefunden_von_Venen/5.png": "91dce7eb6474891a9ee76dc50e1fa403",
"assets/assets/Quizfragen_Bilder/3_Normalbefunden_von_Venen/2.jpg": "45b8b5648f05bb807140738c9d52544c",
"assets/assets/Quizfragen_Bilder/3_Normalbefunden_von_Venen/3.png": "06851fde3aa4cee26e24b21c972bb57b",
"assets/assets/Quizfragen_Bilder/3_Normalbefunden_von_Venen/1.png": "a64019fa420214878a140e8770bab8cf",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/9.png": "970080635f043b01091dfa34dfca1bd5",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/12.png": "0feba37fafce14478a779cc0f1de5dde",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/11.jpg": "2eda674c2082930f222bd802499a755b",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/10.png": "ffdd3ae6e11fb648eca8d0d0143368b2",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/8.gif": "b33270060aa49ec50e4a5e6253b384c5",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/4.png": "ed47c3907740aa497667dd7f3b690a10",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/5.png": "b9ff342f49f3a5e4db1d483fad05b68d",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/7.png": "30d91077fbb476f9649d6f9339f27e44",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/6.jpg": "8394613fefc065256336d8f026c284d7",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/2.png": "947340424523d2f0876d9a66888cd000",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/3.jpg": "81151bddaaed4e5c1f11c42d7893b564",
"assets/assets/Quizfragen_Bilder/4_Pathologien_von_Arterien/1.jpg": "bb061fe7ad27474c5f8a6670dc1b541f",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/4.gif": "6aa199069039a46e6a77ce8bf74eb12a",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/7.gif": "de5fdef89b4f8d6a172286d6106805ea",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/6.gif": "8e286e7fe609ca92891bb8bbe2ad8cb2",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/5.png": "b2c7ff164c89dc6e4c1fb0089d83e600",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/2.png": "d062b75abe80224535d956144c83d04c",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/3.png": "1be47173829574b02a88d48e3e753d46",
"assets/assets/Quizfragen_Bilder/5_Pathologien_von_Venen/1.png": "bdb680db5ff338d1771eac490ae73817",
"assets/assets/en.png": "2817f24d9cda8ce4b7236c9e553d6053",
"assets/assets/fr.png": "7b959eda7cc9468f8a6632dc6565ba75",
"assets/assets/Logo_Background.jpeg": "7b2c94fa51b157ad346c49836126ad08",
"assets/assets/Logo.jpg": "c34527f4097078be177e7f30dbc8995e",
"assets/assets/Quizfragen_Json/alle_fragen.json": "9796fc2be50a00e0cd45946c2a304f8e",
"assets/assets/de.png": "76534eca4cef1aa1ac8e4e16942f8406",
"assets/assets/thumbs-up.png": "ec05cbd41b97239b7adf662e6ada28fa",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
