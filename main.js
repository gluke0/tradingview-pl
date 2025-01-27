new TradingView.widget(
    {
        "autosize": true,
        "symbol": "COINBASE:SOLUSDT",
        "interval": "240",
        "timezone": "ETC/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#faf4ea",
        "enable_publishing": true,
        "withdateranges": true,
        "hide_side_toolnar": false,
        "allow_symble_change": true,
        "watchlist": [
            "COINBASE:SOLUSDT",
            "COINBASE:BTCUSDT",
            "COINBASE:ETHUSDT",
        ],  
        "details": true,
        "hotlist": false,
        "calendar": true, 
        "studies": [
            "STD;SMA",
            "STD;RSI",
        ],
        "container_id": "chart",
        "show_popup_button": true,      
        "popup_width": "1000",
        "popup_height": "650",
      }
);