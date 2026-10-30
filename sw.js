// Adresse fixe de Raaga : rend l'icône installable. La page est toujours relue sur internet
// (elle contient le lien du moment) : rien n'est gardé en mémoire, sauf une page « pas de connexion ».
const OFFLINE = '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Raaga</title>'
  + '<div style="font-family:sans-serif;text-align:center;padding:60px 20px;color:#1f1a14"><div style="font-size:48px">📵</div>'
  + '<h2>Pas de connexion internet</h2><p style="color:#776d62">Vérifiez votre connexion puis réessayez.</p>'
  + '<p><a href="/?app=1" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#e2621b;color:#fff;font-weight:bold;text-decoration:none">Réessayer</a></p></div>';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
