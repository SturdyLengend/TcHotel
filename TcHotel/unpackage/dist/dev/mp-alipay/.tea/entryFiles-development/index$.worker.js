if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-ui/uni-grid/uni-grid?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-ui/uni-grid-item/uni-grid-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-ui/uni-swiper-dot/uni-swiper-dot?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-notice-bar/uni-notice-bar?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/search/search?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/preferent/preferent?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/suzhou/suzhou?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/goods/goods?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/goods/dianzan?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/goods?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/next?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/yiru?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/wanchen?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dingdan/quxiao?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/swiperAdv/swiperAdv?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-transition/uni-transition?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-popup/uni-popup?hash=fb60a7b8055ddef71c4ed9b18246835b601b8200');
require('../../components/uni-ui/uni-popup-message/uni-popup-message?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-popup-dialog/uni-popup-dialog?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-ui/uni-collapse/uni-collapse?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-collapse-item/uni-collapse-item?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/uni-ui/uni-countdown/uni-countdown?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/share-btn/share-btn?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-icon/uni-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/ss-upload-image/ss-upload-image?hash=1dbbbc7cb9b49e866f34ccaa40b0c0203b40e2cb');
require('../../pages/index/index?hash=a4ba88c5c6d9cc3056c17bc88633ea43841359fc');
require('../../pages/find/find?hash=74725b88df3cc55e55507eedd16c8036ea7aef14');
require('../../pages/cart/cart?hash=4a378f4ea9c7771bea6eea651e2e61adfe7ec4d1');
require('../../pages/mine/mine?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/news/news?hash=e02b51470b5279e451f3906423cf9e5fe903fab8');
require('../../pages/reservation/reservation?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/customer/customer?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/hotel/hotel?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cities/cities?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/reservationList/reservationList?hash=e02b51470b5279e451f3906423cf9e5fe903fab8');
require('../../pages/prize/prize?hash=46746fc0346b5d15100de9a7a2ab414fd2613809');
require('../../pages/welfare/welfare?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/questions/questions?hash=3c0bd007b56b7060cd6c757b7770bda584f0685a');
require('../../pages/sleep/sleep?hash=e02b51470b5279e451f3906423cf9e5fe903fab8');
require('../../pages/winter/winter?hash=e757d85fbdb171c46e09312d0abf33f454a8ae87');
require('../../pages/search/search?hash=2ce2d7632b5a5611e0e52e293b6686e1bbcf7579');
require('../../pages/citiesList/citiesList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/hotelDetails/hotelDetails?hash=8b389a0e7bd1a3a99235aed381346d3004ed4cae');
require('../../pages/trafficGuidance/trafficGuidance?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/viewAllphotos/viewAllphotos?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/toViewmore/toViewmore?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/viewDetails/viewDetails?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/shouquan/shouquan?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/biji/biji?hash=b67782b012b77ffa2831fa00fc39fafc23641ae5');
require('../../pages/finddetail/finddetail?hash=5ac34b15462a877016f3cbd74360450ce0eae171');
require('../../pages/mine/center?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/coupon?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/hands?hash=f80a2ec055533aea30bb1cdc06001a4401a23a28');
require('../../pages/mine/join?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/myQR?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/notice?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/qusetion?hash=3c0bd007b56b7060cd6c757b7770bda584f0685a');
require('../../pages/mine/service?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/setting?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}