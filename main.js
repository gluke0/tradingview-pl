new TradingView.widget(
    {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "240",
        "timezone": "ETC/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": true,
        "withdateranges": true,
        "hide_side_toolnar": false,
        "allow_symble_change": true,
        "watchlist": [
            "BINANCE:BNBUSDT",
            "BINANCE:BTCUSDT",
            "COINBASE:CROUSDT",
            "BINANCE:ETHUSDT",
            "BINANCE:SOLUSDT",
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

