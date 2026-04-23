#🛒 React Redux-Toolkit E-Ticaret Uygulaması


Bu proje; modern web teknolojileri kullanılarak geliştirilmiş, ürün listeleme, kategori filtreleme, ürün detaylarını görüntüleme ve sepet yönetimi özelliklerine sahip dinamik bir e-ticaret arayüzüdür.

##🚀 Öne Çıkan Özellikler

-Dinamik Ana Sayfa: Kategori seçimi ve fiyat/tarih sıralama özellikleriyle entegre çalışan ürün listeleme.

-Global State Yönetimi: Redux Toolkit kullanılarak sepet işlemleri ve ürün verileri tüm uygulamada senkronize edilir.

-Detaylı Ürün Görünümü: Her ürün için özel ID tabanlı detay sayfaları ve yükleme (loading) durum yönetimi.

-Gelişmiş Sepet Yönetimi: Ürünlerin sepete eklenmesi, toplam tutarın anlık hesaplanması ve sepet boş kontrolü.

-Responsive Tasarım: Tailwind CSS ile tüm cihazlara uyumlu arayüz.

##🛠 Kullanılan Teknolojiler
Frontend: React.js

State Management: Redux Toolkit (@reduxjs/toolkit)

Routing: React Router DOM

Styling: Tailwind CSS

Icons/UI: React Icons (Opsiyonel kullanıldıysa)

📂 Sayfa Yapıları ve Mantığı
1. Ana Sayfa (Home.jsx)
Uygulamanın giriş noktasıdır. useState ile kategori ve sıralama bilgilerini tutar.

-SliderComp: Öne çıkan kampanyaları gösterir.

-Sorting & Category: Kullanıcıdan aldığı filtreleme bilgilerini Products bileşenine aktararak dinamik listeleme sağlar.

2. Ürün Detay Sayfası (Detail.jsx)
-URL'den alınan id parametresine göre API'den (veya slice'dan) ilgili ürünü çeker.

-Veri yüklenirken Loading bileşeni aktif olur.

-Veri hazır olduğunda DetailComp üzerinden ürün özellikleri gösterilir.

3. Sepet Sayfası (Cart.jsx)
-Kullanıcının alışveriş listesini yönettiği alandır.

-getCartTotal eylemi ile sepet tutarı sürekli güncel tutulur.

-Sepet boşsa kullanıcıyı ana sayfaya yönlendiren yönlendirme mekanizması içerir.

#💻 Kurulum
1.Projeyi klonlayın:

Bash
git clone [https://github.com/HasanEROL1/Shopzone-redux]

2.Bağımlılıkları yükleyin:

Bash
npm install

3.Uygulamayı başlatın:

Bash
npm start

#🏗 Proje Klasör Yapısı
-src/components: Tekrar kullanılabilir arayüz bileşenleri.

-src/pages: Ana sayfa yapıları (Home, Detail, Cart).

-src/redux: Redux Slice'ları ve Store konfigürasyonu.

 
 #![tanıtım](.shopzone.gif)
