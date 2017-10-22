function onDeviceReady() {
	document.removeEventListener('deviceready', onDeviceReady, false);

	//Настройки AdMobAds:
	admob.setOptions({
		publisherId: "pub-2338676251368727", //ID издателя
		interstitialAdId: "ca-app-pub-2338676251368727/7178292968", //ID рекламного блока
		adSize: admob.AD_SIZE.BANNER, //размер баннера
		bannerAtTop: false, //положение баннера: true-вверху, false-внизу
		overlap: false, //Разрешить веб-просмотр перекрытия баннера
		offsetStatusBar: false, //установить значение true, чтобы избежать перекрытия строки состояния ios7
		isTesting: false, //если надо потестировать объявления устанавливаем true
		autoShowBanner: true, //автоматическое показ объявлений баннеров, когда они доступны
		autoShowInterstitial: true //объявление объявления межстраничного объявления при наличии
	});

	// Start showing banners (atomatic when autoShowBanner is set to true) 
	admob.createBannerView();

	// Request interstitial (will present automatically when autoShowInterstitial is set to true) 
	admob.requestInterstitialAd();

}

document.addEventListener("deviceready", onDeviceReady, false);
