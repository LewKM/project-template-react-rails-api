#users 
puts "📃 Seeding data..."
u1 = User.create(username: "timcook", email: "timcook@yahoo.com", password_digest: "cowsandgoats", profile_image: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg") 

#articles 
# a1 = Article.create({
#     user_id: u1.id,
#     title: "Habits that damage your mental health.",
#     topic: "Mental health",
#     story: "If you clicked on this article, I am quite certain that you struggle from time to time with your mental health. Don’t worry, you’re not alone. I struggle too.We are living in a time where we are constantly measured on what we achieve. This results in doubts that we are good enough, or ever will be good enough.We are more disconnected from our fellow humans than ever before, leaving us lonelier than ever before.We are constantly seeing the best moments of others’ lives on social media, making us wonder why our own lives aren’t as good as our friends.I struggle with all these three things. I am lonely, and from time to time I don’t feel seen by the people closest to me.",
#     time: 3
# })


  c1 = Chart.create({
    comment: "The AUDUSD can be traded using the shoulder and neck patterns. First, identify the right shoulder and neckline. The right shoulder should be lower than the left shoulder, and the neckline should be lower than the right shoulder. Second, place a stop loss just below the neckline. Third, wait for the price to break above the neckline and then enter the trade. Fourth, exit the trade when the price reaches the top of the right shoulder.",
    image_url: "https://forextraderdotlive.files.wordpress.com/2015/03/aud-usd-hs.png",
    trading_pair: "AUD/USD",
    user_id: u1.id,
  })

  c2 = Chart.create({
    comment: "Gold Spot trading is simple when you understand how to identify key supply and demand zones. These are areas on the chart where the price has stalled, reverses or changes direction. By drawing horizontal lines to identify these areas, you can then make trading decisions based on whether price is approaching a zone from above or below. If it is approaching from below, it is likely that price will continue to rise as buyers enter the market. If it is approaching from above, it is likely that price will continue to fall as sellers enter the market.",
    image_url: "https://www.metalsmine.com/attachment/image/1421573?d=1399464100",
    trading_pair: "XAU/USD",
    user_id: u1.id,
  })

  c3 = Chart.create({
    comment: "XAUUSD can be traded using the RSI indicator by looking for overbought and oversold conditions. When the RSI is overbought, it is time to sell, and when the RSI is oversold, it is time to buy.",
    image_url: "https://s3.tradingview.com/u/UdPozvrL_mid.png",
    trading_pair: "XAU/USD",
    user_id: u1.id,
  })

  c4 = Chart.create({
    comment: "When trading using resistance level and trendline, it is important to first identify the trendline. Once the trendline is identified, the resistance level can be located. The resistance level is the point at which the price of the security is expected to stop rising and start falling. The trader can then enter a short position when the price of the security falls below the resistance level.",
    image_url: "https://i0.wp.com/www.forextrading200.com/wp-content/uploads/2017/08/forex-multiple-timeframe-trading-example.png?resize=650,400",
    trading_pair: "SETUP definition",
    user_id: u1.id,
  })

  c5 = Chart.create({
    comment: "Gold spot trading in 1-minute time frames is simple. First, identify the overall trend by looking at a longer time frame chart. Second, enter your trade in the direction of the trend. Finally, set your stop loss and take profit levels.",
    image_url: "https://i.ytimg.com/vi/55krLa2O_d0/maxresdefault.jpg",
    trading_pair: "XAU/USD",
    user_id: u1.id,
  })

  c6 = Chart.create({
    comment: "In order to capture 200 pips in Gold Spot trading, the trader would need to identify a Gold Spot price trend and then enter into a long or short position accordingly. The trader would then need to monitor the Gold Spot price movements and exit the position when the desired profit target is reached.",
    image_url: "https://s3.tradingview.com/g/g77KXb03_big.png",
    trading_pair: "XAU/USD",
    user_id: u1.id,
  })

  c7 = Chart.create({
    comment: "Bullish market during NFP week",
    image_url: "data:image/jpeg;base64,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",
    trading_pair: "NZD/JPY",
    user_id: u1.id
  })

  c8 = Chart.create({
    comment: "When trading using resistance level and trendline, it is important to first identify the trendline. Once the trendline is identified, the resistance level can be located. The resistance level is the point at which the price of the security is expected to stop rising and start falling. The trader can then enter a short position when the price of the security falls below the resistance level.",
    image_url: "https://i0.wp.com/www.forextrading200.com/wp-content/uploads/2017/08/forex-multiple-timeframe-trading-example.png?resize=650,400",
    trading_pair: "AUD/GBP",
    user_id: u1.id
  })
