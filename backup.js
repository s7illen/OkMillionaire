

// - create a net worth variable = 1, 000, 000

    let netWorth = 1000000;

// - create a total game time variable = 1

    let gameTime = 1;
    $('.gameTime').append('Week ' + gameTime);

// - create a bank interest variable = 100.4 % per month = 100.08 per week

    let bankInterest = 1.0005;

//set up bank value & stock total value

    let stockTotalAccount = 0;

    let bankAccount = 1000000;

function netWorthSum(){
    netWorth = bankAccount + stockTotalAccount;
    }
    netWorthSum();

function showBalance() {
        $('.banking .amount').html(`$${Math.round(bankAccount)}`);
        $('.netWorthAmount').html(`$${Math.round(netWorth)}`);
    }



// - create a stock market array 
// - create a stock object in the market array
// - a stock object has its name, value and stability ratio(1 to 10) trend ratio(1 to 10)



    let stockMarket = [
        {
            name: 'Amazon',
            value: 1,
            stability: 7,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Apple',
            value: 1,
            stability: 6,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Boeing',
            value: 1,
            stability: 5,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Costco',
            value: 1,
            stability: 3,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Exxon',
            value: 1,
            stability: 1,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Nike',
            value: 1,
            stability: 4,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Tesla',
            value: 1,
            stability: 9,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
        {
            name: 'Toyota',
            value: 1,
            stability: 2,
            trend: 1,
            cart: 0,
            hold: 0,
            updown: 0,
            year: 0,
            event: 1,
        },
    ]


//create a news/events array



let headlines = [
    {
        text: 'Fed Raise Interest Rates by 0.25%',
        effect: function () {
            bankInterest += 0.00005;
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 0.98;
                stockMarket[i].trend -= 0.0005;
            }
        },
    },
    {
        text: 'Fed Cut Interest Rates by 0.25%',
        effect: function () {
            bankInterest -= 0.00005;
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.02;
                stockMarket[i].trend += 0.0005;
            }
        },
    },
    {
        text: 'Fed Raise Interest Rates by 0.5%',
        effect: function () {
            bankInterest += 0.0001;
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 0.95;
                stockMarket[i].trend -= 0.001;
            }
        },
    },
    {
        text: 'Fed Cut Interest Rates by 0.5%',
        effect: function () {
            bankInterest -= 0.0001;
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.05;
                stockMarket[i].trend += 0.001;
            }
        },
    },
    {
        text: 'Trump Announces Another New Tariff Starts Next Week',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *=0.95;
                stockMarket[i].trend -=0.0015;
            }
        },
    },
    {
        text: 'Federal Reserve Chairman Powell Says US Economy is Growing Well',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.05;
                stockMarket[i].trend += 0.001;
            }
        },
    },
    {
        text: 'China is Experiencing a Debt Crisis, Global Economy Slows Down',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 0.95;
                stockMarket[i].trend -= 0.0015;
            }
        },
    },
    {
        text: 'Investors Fear Global Economy Stuck in Low Gear',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].trend -= 0.0005;
            }
        },
    },
    {
        text: 'EU Kicked UK out of EU, a Recession is Happening',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 0.9;
                stockMarket[i].trend -= 0.0025;
            }
        },
    },
    {
        text: 'India, The New Global Economy Engine GDP Grows in Double Digits',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.02;
                stockMarket[i].trend += 0.001;
            }
        },
    },
    {
        text: 'US Unemployment Rate Falls to 50 Years Low',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].trend += 0.001;
            }
        },
    },
    {
        text: 'Amazon Rainforest, We are Going to Hell!',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].trend -= 0.001;
            }
        },
    },
    {
        text: 'US Fighter Plane Got Shot Down by Russian Forces, World War III is Here',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 0.85;
                stockMarket[i].trend -= 0.0025;
            }
        },
    },
    {
        text: 'US lifts Russian Sactions, Trump: Russia is Our Friend!',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.05;
                stockMarket[i].trend += 0.001;
            }
        },
    },
    {
        text: 'Brexit Proposal has turned Down by the Queen, UK re-embraces EU',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.15;
                stockMarket[i].trend += 0.0015;
            }
        },
    },
    {
        text: '90% of Gen Z Hate Working, Our Future is in Question',
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].trend -= 0.0015;
            }
        },
    },
    {
        text: 'Jeff Bezos Retired, Amazon is in Trouble',
        effect: function () {
            stockMarket[0].event *= 0.8;
            stockMarket[0].trend -= 0.005;
            stockMarket[1].event *= 1.05;
            stockMarket[3].event *= 1.05;
            stockMarket[3].trend += 0.002;
            stockMarket[6].event *= 1.05;
        },
    },
    {
        text: `Amazon Profit Beats Investors' Expection`,
        effect: function () {
            stockMarket[0].event *= 1.1;
            stockMarket[0].trend += 0.0025;
            stockMarket[3].event *= 0.98;
        },
    },
    {
        text: `Amazon Opens 2000 New Grocery Stores, and More to Expand`,
        effect: function () {
            stockMarket[0].event *= 1;
            stockMarket[0].trend += 0.0025;
            stockMarket[3].trend -= 0.002;
        },
    },
    {
        text: `Amazon's Prime Day isn't Popular Any More`,
        effect: function () {
            stockMarket[0].event *= 0.9;
            stockMarket[0].trend -= 0.0025;
            stockMarket[3].trend += 0.002;
        },
    },
    {
        text: `Adidas Stop Selling on Amazon, After Nike Breakup`,
        effect: function () {
            stockMarket[0].event *= 0.95;
            stockMarket[0].trend -= 0.0025;
            stockMarket[3].trend += 0.001;
        },
    },
    {
        text: `Trump: "I Like Online Shopping, I'm Okay They Don't Pay Taxes, Just Like me."`,
        effect: function () {
            stockMarket[0].event *= 1.1;
            stockMarket[0].trend += 0.005;
            stockMarket[3].trend -= 0.001;
        },
    },
    {
        text: `Amazon Open its Pharmacy Website`,
        effect: function () {
            stockMarket[0].event *= 1.05;
            stockMarket[0].trend += 0.0025;
            stockMarket[3].trend -= 0.0025;
        },
    },
    {
        text: `Steve Jobs is Still Alive`,
        effect: function () {
            stockMarket[1].event *= 1.25;
            stockMarket[1].trend += 0.002;
        },
    },
    {
        text: `Apple Revenue Declines, Tim Apple Resigns`,
        effect: function () {
            stockMarket[1].event *= 0.85;
            stockMarket[1].trend -= 0.001;
        },
    },
    {
        text: `Apple Lanuched A Foldable IPhone with A666 Processor`,
        effect: function () {
            stockMarket[1].event *= 1.15;
            stockMarket[1].trend += 0.0005;
        },
    },
    {
        text: `Apple Lanuched A Foldable IPhone with A666 Processor`,
        effect: function () {
            stockMarket[1].event *= 1.15;
            stockMarket[1].trend += 0.0005;
        },
    },
    {
        text: `Apple Recalls All AirPods Pro, They Found It Explodes if You are Listening to Kanye West`,
        effect: function () {
            stockMarket[1].event *= 0.9;
            stockMarket[1].trend -= 0.00025;
        },
    },
    {
        text: `MacBooks are Way Too Pricy, But People Still Buy Them`,
        effect: function () {
            stockMarket[1].trend += 0.0005;
        },
    },
    {
        text: `Tim Cook: Consumers Don't Need 5G Phones, They Just Want IPhones`,
        effect: function () {
            stockMarket[1].event *= 0.95;
            stockMarket[1].trend -= 0.0005;
        },
    },
    {
        text: `Boeing CEO Pleads Guity In Congress`,
        effect: function () {
            stockMarket[2].event *= 0.90;
            stockMarket[2].trend -= 0.00025;
        },
    },
    {
        text: `737 Max Will Never Fly Again`,
        effect: function () {
            stockMarket[2].event *= 0.85;
            stockMarket[2].trend -= 0.0005;
        },
    },
    {
        text: `Boeing Launched New 737 Maxnomore Which Focused on Safety`,
        effect: function () {
            stockMarket[2].event *= 1.15;
            stockMarket[2].trend += 0.001;
        },
    },
    {
        text: `Congress: All 737 Max are Allow to Fly Agian`,
        effect: function () {
            stockMarket[2].event *= 1.25;
            stockMarket[2].trend += 0.005;
        },
    },
    {
        text: `Due to Expensive Housing in Major Cities, Some Commuters Start Taking Flights to Work`,
        effect: function () {
            stockMarket[2].event *= 1.1;
            stockMarket[2].trend += 0.005;
            stockMarket[4].event *= 1.05;
        },
    },
    {
        text: `Survery: People Now Avoiding Boeing Planes Due to Safety Concern`,
        effect: function () {
            stockMarket[2].event *= 0.98;
            stockMarket[2].trend -= 0.005;
        },
    },
    {
        text: `Costco Board Decide to Lower Their Margin`,
        effect: function () {
            stockMarket[3].event *= 0.95;
            stockMarket[3].trend += 0.0025;
        },
    },
    {
        text: `Costco Opens 230 New Stores This Year`,
        effect: function () {
            stockMarket[3].event *= 1.02;
            stockMarket[3].trend += 0.0025;
        },
    },
    {
        text: `Costco Secretly Changed Their Return Policy, Customers are Unhappy`,
        effect: function () {
            stockMarket[3].event *= 0.98;
            stockMarket[3].trend -= 0.0025;
        },
    },
    {
        text: `Costco Want to Find Out Why More People not Renewing Their Membership `,
        effect: function () {
            stockMarket[3].event *= 0.95;
            stockMarket[3].trend -= 0.0025;
        },
    },
    {
        text: `Warren Buffett Trims Apple Position, Buying Costco Instead`,
        effect: function () {
            stockMarket[1].event *= 0.97;
            stockMarket[3].event *= 1.05;
        },
    },
    {
        text: `Costco Want to Find Out Why More People not Renewing Their Membership `,
        effect: function () {
            stockMarket[3].event *= 0.95;
            stockMarket[3].trend -= 0.0025;
        },
    },
    {
        text: `Demand for Carbon Fuels Is Still Growing`,
        effect: function () {
            stockMarket[4].event *= 1.02;
            stockMarket[4].trend += 0.005;
        },
    },
    {
        text: `Trump: "Climate Change is Nonsense."`,
        effect: function () {
            stockMarket[4].event *= 1.05;
            stockMarket[4].trend += 0.0025;
            stockMarket[6].event *= 0.95;
            stockMarket[6].trend -= 0.0025;
        },
    },
    {
        text: `Exxon Mobil Reports Lower Profit, Revenue"`,
        effect: function () {
            stockMarket[4].event *= 0.92;
            stockMarket[4].trend -= 0.0025;
        },
    },
    {
        text: `Electric Car Sales Decline Due to Cheap Gas Price`,
        effect: function () {
            stockMarket[4].event *= 1.05;
            stockMarket[4].trend += 0.005;
        },
    },
    {
        text: `EU Plan to Build Electric Cars Only in 20 Years`,
        effect: function () {
            stockMarket[4].event *= 0.95;
            stockMarket[4].trend -= 0.005;
        },
    },
    {
        text: `Saudi Aramco Break Up With Exxon Mobil`,
        effect: function () {
            stockMarket[4].event *= 0.95;
            stockMarket[4].trend -= 0.0025;
        },
    },
    {
        text: `Brent Oil Price Went Up 10% Overnight`,
        effect: function () {
            stockMarket[2].event *= 0.95;
            stockMarket[2].trend -= 0.0025;
            stockMarket[4].event *= 1.1;
            stockMarket[4].trend += 0.0025;
            stockMarket[6].event *= 1.1;
            stockMarket[6].trend += 0.0025;
        },
    },
    {
        text: `Oil Price Reaches New Low in 10 Years`,
        effect: function () {
            stockMarket[2].event *= 1.05;
            stockMarket[2].trend += 0.0025;
            stockMarket[4].event *= 0.95;
            stockMarket[4].trend -= 0.005;
            stockMarket[6].event *= 0.95;
            stockMarket[6].trend -= 0.0025;
        },
    },
    {
        text: `Lebron James Retired`,
        effect: function () {
            stockMarket[5].event *= 0.95;
            stockMarket[5].trend -= 0.0025;
        },
    },
    {
        text: `Nike's Digital Strategy Attracted Many Gen-Z Buyers`,
        effect: function () {
            stockMarket[5].event *= 1.01;
            stockMarket[5].trend += 0.0025;
        },
    },
    {
        text: `Shoe Flippers Love Nike's Brand New Sneaker Series`,
        effect: function () {
            stockMarket[5].event *= 1.02;
            stockMarket[5].trend += 0.0025;
        },
    },
    {
        text: `Shoe Flippers Love Nike's Brand New Sneaker Series`,
        effect: function () {
            stockMarket[5].event *= 1.02;
            stockMarket[5].trend += 0.0025;
        },
    },
    {
        text: `Nike Reopens its Store on Amazon`,
        effect: function () {
            stockMarket[5].event *= 1.04;
            stockMarket[5].trend += 0.0025;
        },
    },
    {
        text: `Nike Close its Online Store`,
        effect: function () {
            stockMarket[5].event *= 0.95;
            stockMarket[5].trend -= 0.005;
        },
    },
    {
        text: `Trump: If Nike don't Move Their Factory Back to America, I Will Tax Them Hard!`,
        effect: function () {
            stockMarket[5].event *= 0.90;
            stockMarket[5].trend -= 0.0025;
        },
    },
    {
        text: `Trump: Tesla Should Build Only Their Factories in USA`,
        effect: function () {
            stockMarket[6].event *= 0.95;
            stockMarket[6].trend -= 0.0025;
        },
    },
    {
        text: `Trump: Tesla Should Build Only Their Factories in USA`,
        effect: function () {
            stockMarket[6].event *= 0.95;
            stockMarket[6].trend -= 0.0025;
        },
    },
    {
        text: `Ford New Electric SUV Received 42,000 Reservation at Launch`,
        effect: function () {
            stockMarket[6].event *= 0.95;
            stockMarket[6].trend -= 0.0025;
            stockMarket[7].event *= 0.95;
            stockMarket[7].trend -= 0.0025;
        },
    },
    {
        text: `US Goverment: Electric Car Tax Exemption Doubles`,
        effect: function () {
            stockMarket[6].event *= 1.2;
            stockMarket[6].trend += 0.005;
            stockMarket[4].event *= 0.9;
            stockMarket[4].trend -= 0.0025;
        },
    },
    {
        text: `Elon Musk Shut Down His Twitter Forever`,
        effect: function () {
            stockMarket[6].event *= 1.05;
            stockMarket[6].trend += 0.0025;
        },
    },
    {
        text: `Elon Musk Resigned, He Wants to Spend More Time in Rocket Science`,
        effect: function () {
            stockMarket[6].event *= 0.9;
            stockMarket[6].trend -= 0.0025;
        },
    },
    {
        text: `Elon Musk Admits on Twitter: He is Alien`,
        effect: function () {
            stockMarket[6].event *= 0.95;
        },
    },
    {
        text: `Tesla Model Y Sales Number Beats Expection`,
        effect: function () {
            stockMarket[6].event *= 1.1;
            stockMarket[6].trend += 0.0025;
            stockMarket[4].event *= 0.99;
            stockMarket[4].trend -= 0.00125;
        },
    },
    {
        text: `New Breakthrough Technology Discovered Lowers Battery Cost by 30%`,
        effect: function () {
            stockMarket[6].event *= 1.1;
            stockMarket[6].trend += 0.005;
            stockMarket[4].event *= 0.95;
            stockMarket[4].trend -= 0.0025;
            stockMarket[7].event *= 0.98;
            stockMarket[7].trend -= 0.0025;
        },
    },
    {
        text: `Toyota are Developing a New PHEV Cost Only 25k`,
        effect: function () {
            stockMarket[7].event *= 1.05;
            stockMarket[7].trend += 0.0025;
        },
    },
    {
        text: `Consumer Report Claims Toyota Have the Highest Customer Satisfaction Among All Car Brands`,
        effect: function () {
            stockMarket[7].event *= 1.025;
            stockMarket[7].trend += 0.005;
        },
    },
    {
        text: `Toyota Tracks Data without Owner's Permisson, More than Twenty Lawsuits filed`,
        effect: function () {
            stockMarket[7].event *= 0.95;
        },
    },
    {
        text: `Two People Killed in a Toyota SUV, Police Claims Toyota Safety Sense System Caused the Accident`,
        effect: function () {
            stockMarket[7].event *= 0.9;
            stockMarket[7].trend -= 0.0025;
        },
    },
    {
        text: `California Will No Longer Buy Cars Made by Toyota Due to Emmission Rules`,
        effect: function () {
            stockMarket[7].event *= 0.95;
            stockMarket[7].trend -= 0.0025;
        },
    },
    {
        text: `Trump Leaves Whitehouse`,
        effect: function () {
            for (i = 0; i < stockMarket.length; i++) {
                stockMarket[i].event *= 1.03;
            }
        },
    },


]



//connect holdings with stockaccount
function stockSum(){
    stockTotalAccount = 0;
    for (i = 0 ; i < stockMarket.length; i++){
        stockTotalAccount += stockMarket[i].hold;
    }
}


// stock holding % slider

    //executing purchase or sell activity
    let investTotalPercent = 0;


    // let sliderValue = 0;
    // $('.buySell .hold').append(sliderValue);

    let buyAmount1 = stockMarket[0].hold;

function inputUpdate(x) {
        $('.st' + x + ' .buyingAmount').css('display', 'block');
        let sliderValue = $('.st' + x + ' input').val();
        $('.st' + x + ' .buyingAmount').empty();
        buyAmount = sliderValue * 10000;
        $('.st' + x + ' .buyingAmount').append('$' + buyAmount); 
        stockMarket[x].cart = buyAmount;
        $('.buySell .hold').append(sliderValue);
    }

    $('.st0 input').change(function () {
            inputUpdate(0);
        })

    $('.st1 input').change(function () {
            inputUpdate(1);
        })

    $('.st2 input').change(function () {
            inputUpdate(2);
        })
    
    $('.st3 input').change(function () {
            inputUpdate(3);
        })
    
    $('.st4 input').change(function () {
            inputUpdate(4);
        })
    
    $('.st5 input').change(function () {
            inputUpdate(5);
        })
    
    $('.st6 input').change(function () {
            inputUpdate(6);
        })
    
    $('.st7 input').change(function () {
            inputUpdate(7);
        })



    $('.stockSubmit').on('click', function () {

        $('.buyingAmount').css('display', 'none');

        let prevStockSum = stockTotalAccount;

        for (i = 0; i < stockMarket.length; i++){
            stockMarket[i].hold = stockMarket[i].cart;
            $('.st' + i + ' .stockPosition').empty();
            $('.st' + i + ' .stockPosition').append('$' + Math.round(stockMarket[i].hold));
        }

        stockSum();
        $('.stockMarket .amount').empty();
        $('.stockMarket .amount').append('$' + Math.round(stockTotalAccount));

        bankAccount += prevStockSum - stockTotalAccount;

        netWorthSum();

        showBalance();



    })









    

// #monthlychange: bank interest variable + (random variable / 1000)


$('.next').on('click', function () {


        //random events
        let ranEvent = Math.round(Math.random() * 100);
        //fed action to adjust the market
        let economyTrend = 0;
        for(i = 0; i < stockMarket.length; i++) {
            economyTrend += stockMarket[i].trend;       
        }

        $('.news h3').empty();

        if (economyTrend / stockMarket.length < 0.998){
            ranEvent = 3
            $('.news h3').append(headlines[ranEvent].text);
            headlines[ranEvent].effect();
        }
        else if (economyTrend / stockMarket.length > 1.002) {
            ranEvent = 2
            $('.news h3').append(headlines[ranEvent].text);
            headlines[ranEvent].effect();
        }
        else {
            if (ranEvent < 72) {
                $('.news h3').append(headlines[ranEvent].text);
                headlines[ranEvent].effect();
            }
            else {
                $('.news h3').append('No Breaking News');
            }
        }



        

        //banking
        let ranBank = (Math.random() * 2) - 1;
        bankInterest += (ranBank/30000);
        const bankAnnualInterest = Math.pow(bankInterest, 52) - 1;
        const bankAnnualRound = Math.round(bankAnnualInterest * 40000) / 400;
        $('.interest').html(`annual interest rate ${bankAnnualRound}%`);




        stockMarket.forEach(function(i){
            let ranStock = (Math.random() * 2) - 1;
            preStockValue = i.value;

        // stocks fluctate randomly
            i.value = i.value * i.event * i.trend * (1 + i.stability * ranStock / 100 );

            i.event = 1;


        //calculate the up & down performance of the stock
            i.updown = Math.round((i.value/preStockValue - 1)*100*100)/100;
            // i.updown = Math.round((i.trend * (1 + i.stability * ranStock / 100 - 1))*100*100)/100;
            i.year = Math.round((i.value - 1)*100*100)/100;

            i.hold = i.hold * (1 + i.updown/100);

            console.log(i)

        });


        



        $('.stockMarket ul li .change').empty();
        $('.stockMarket ul li .yearlyChange').empty();

        for (x = 0; x < stockMarket.length; x++){

            if (stockMarket[x].updown > 0) {
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.change').prepend(`<i class="fas fa-angle-double-up"></i> ${Math.abs(stockMarket[x].updown)}%`);
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.change').css('color', 'green');
            }   
            else {  
                $('.stockMarket ' + 'ul ' + 'li:nth-child('+(x+1)+') ' + '.change').prepend(`<i class="fas fa-angle-double-down"></i> ${Math.abs(stockMarket[x].updown)}%`);
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.change').css('color', 'red');
            }

            if (stockMarket[x].year > 0) {
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.yearlyChange').prepend(`<i class="fas fa-angle-double-up"></i> ${Math.abs(stockMarket[x].year)}%`);
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.yearlyChange').css('color', 'green');
            }
            else {
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.yearlyChange').prepend(`<i class="fas fa-angle-double-down"></i> ${Math.abs(stockMarket[x].year)}%`);
                $('.stockMarket ' + 'ul ' + 'li:nth-child(' + (x + 1) + ') ' + '.yearlyChange').css('color', 'red');
            }

        }

        //change on player's stock position profile
        //calculate the outcome

        let preStockAccount = stockTotalAccount;

        stockSum();
        for (i = 0; i < stockMarket.length; i++) {
            $('.st' + i + ' .stockPosition').empty();
            $('.st' + i + ' .stockPosition').append('$' + Math.round(stockMarket[i].hold));
        }

        $('.stockMarket .amount').empty();
        $('.stockMarket .amount').append(`$${Math.round(stockTotalAccount)}`);

        $('.stockChange').empty();
        $('.stockChange').append(`$${Math.round(Math.abs(stockTotalAccount - preStockAccount))}`);

        $('.stockChangePre').empty();
        $('.stockChangePre').append(`${Math.round(Math.abs(stockTotalAccount - preStockAccount)/preStockAccount*10000)/100}%`);

        if (stockTotalAccount > preStockAccount) {
            $('.stockChange').css('color', 'green');
            $('.stockChange').prepend(`<i class="fas fa-angle-double-up"></i> `);
            $('.stockChangePre').css('color', 'green');
            $('.stockChangePre').prepend(`<i class="fas fa-angle-double-up"></i> `);
        }  
        else{
            $('.stockChange').css('color', 'red');
            $('.stockChange').prepend(`<i class="fas fa-angle-double-down"></i> `);
            $('.stockChangePre').css('color', 'red');
            $('.stockChangePre').prepend(`<i class="fas fa-angle-double-down"></i> `);
        }  
        
        bankAccount = bankAccount * bankInterest;
        netWorthSum();
        showBalance();

        gameTime += 1;
        $('.gameTime').empty();
        $('.gameTime').append('Week ' + gameTime);

        let ROI = Math.round((netWorth/1000000 - 1)*10000)/100;
        
        let achievement = String;
        if (ROI > 200) {
        achievement = 'You are the Warren Buffett of This Century!';
        }
        else if (ROI > 100) {
            achievement = `You are the Greatest Investor Ever!`;
        }
        else if (ROI > 50){
            achievement = 'Wow! You are a Geneius at Investing!';
        }
        else if (ROI > 40) {
            achievement = 'What an Achievement! Wall Street Needs You!';
        }
        else if (ROI > 30) {
            achievement = 'Excellent! Smart Investment!';
        }
        else if (ROI > 20) {
            achievement = 'Great Job! Keep it Going!';
        }
        else if (ROI > 10) {
            achievement = 'Not Bad, But You Can Do Better!';
        }
        else if (ROI > 0) {
            achievement = `Well, at Least You didn't Lose Money`;
        }
        else if (ROI > -10) {
            achievement = `Bad Luck, My Friend`;
        }
        else if (ROI > -20) {
            achievement = `Play Safe Next Time, Amateur`;
        }
        else if (ROI > -30) {
            achievement = `Just Play This Game, Don't Invest in Real Life`;
        }
        else if (ROI > -40) {
            achievement = `The Goddess of Fortune Dislikes You`;
        }
        else if (ROI > -60) {
            achievement = `Why not Just Spend these Money Instead?`;
        }
        else if (ROI > -90) {
            achievement = `At the Very Least, You Haven't Lost Everything`;
        }
        else if (ROI > -120) {
            achievement = `Donating is Better Than Investing, My Friend.`;
        }
        else if (ROI > -200) {
            achievement = `Congratulations, You're Just Struck by Lightning!`;
        }

        if(gameTime === 20) {
            alert(`Your First Year Return On Investment is ${ROI}%.
            ${achievement}
            `)
        }

    console.log(economyTrend / stockMarket.length);

})









// - assign all money to the bank initially
// - when 'forward' button is clicked, bank variable and stock variable will perform the #monthychange activity, changed variables will be saved and displayed on the website
// - whenever player input any amount into a stock value, subtract the amount from the bank balance
// - when player input amount is greater than the bank balance, show an error
// - after 12 months, show(net worth - 1, 000, 000) / 1, 000, 000 in %, as return on investment
