Game.Win('Third-party');
if(BroboMod === undefined) var BroboMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
BroboMod.name = 'Brobo Mod';
BroboMod.version = '1.0';
BroboMod.GameVersion = '2.052';

BroboMod.launch = function(){
	BroboMod.init = function(){
		BroboMod.isLoaded = 1;
		if (Game.prefs.popups) Game.Popup(BroboMod.name + ' loadedaaaaaaaaaaaaaaaaaaaaaaaaaa!');
		else Game.Notify(BroboMod.name + ' loaded!', '', '', 1, 1);
	
		Game.customStatsMenu.push(function(){
			CCSE.AppendStatsVersionNumber(BroboMod.name, BroboMod.version);
			CCSE.AppendStatsSpecial("B: 56");
		});
	};


}

if(!BroboMod.isLoaded){
	if(CCSE && CCSE.isLoaded){
		BroboMod.launch();
	}
	else{
			if(!CCSE) var CCSE = {};
			if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
			CCSE.postLoadHooks.push(BroboMod.launch);
	}
}