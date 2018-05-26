      
google.setOnLoadCallback(drawRegionsMap);

function getData() {

    var jsonData = [{"crime":"Robbery at residential premises","incidents":"0","police_station":"Riebeeck East","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Common assault","incidents":"292","police_station":"Makhado","province":"Limpopo","year":"2005-2006"}
    ,{"crime":"Drug-related crime","incidents":"82","police_station":"Vulindlela","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Murder","incidents":"1","police_station":"St Helena Bay","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"4","police_station":"Olifantshoek","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"Other Serious Crime","incidents":"501","police_station":"Kriel","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Mothibistad","province":"Northern Cape","year":"2016-2017"}
    ,{"crime":"Drug-related crime","incidents":"118","police_station":"Claremont","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"1","police_station":"Levubu","province":"Limpopo","year":"2005-2006"}
    ,{"crime":"Contact Related Crime","incidents":"422","police_station":"Elsies River","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"2","police_station":"Boshof","province":"Free State","year":"2011-2012"}
    ,{"crime":"Commercial crime","incidents":"3","police_station":"Nondweni","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Ratanda","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Cofimvaba","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Common robbery","incidents":"7","police_station":"Koppies","province":"Free State","year":"2016-2017"}
    ,{"crime":"Property Related Crime","incidents":"421","police_station":"Leslie","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"510","police_station":"Virginia","province":"Free State","year":"2011-2012"}
    ,{"crime":"Property Related Crime","incidents":"130","police_station":"Port St Johns","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Robbery at non-residential premises","incidents":"6","police_station":"Swartkops","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Commercial crime","incidents":"39","police_station":"Bethal","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Shoplifting","incidents":"2","police_station":"Koppies","province":"Free State","year":"2015-2016"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"178","police_station":"Modjadjiskloof","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Arson","incidents":"1","police_station":"Healdtown","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Robbery at non-residential premises","incidents":"93","police_station":"Orange Farms","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"TRIO Crimes","incidents":"0","police_station":"Marydale","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"83","police_station":"Niekerkshoop","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Other Serious Crime","incidents":"150","police_station":"Ezinqoleni","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Arson","incidents":"2","police_station":"Mpophomeni","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"20","police_station":"Norvalspont","province":"Northern Cape","year":"2016-2017"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"27","police_station":"Pella","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"Commercial crime","incidents":"11","police_station":"Kopanong","province":"Free State","year":"2014-2015"}
    ,{"crime":"Rape","police_station":"Kensington","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Contact sexual offences","incidents":"1","police_station":"Kirstenhof","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Arson","incidents":"6","police_station":"Rabie Ridge","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Attempted murder","incidents":"5","police_station":"Boipatong","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Jeffreys Bay","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"132","police_station":"Sandringham","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Rossouw","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"13","police_station":"Virginia","province":"Free State","year":"2007-2008"}
    ,{"crime":"Common assault","incidents":"8","police_station":"Rietbron","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Robbery at residential premises","incidents":"33","police_station":"Amanzimtoti","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Other Serious Crime","incidents":"1164","police_station":"Manenberg","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Attempted sexual offences","incidents":"2","police_station":"Khutsong","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"322","police_station":"Ngodwana","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Carjacking","incidents":"1","police_station":"Kaapmuiden","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"349","police_station":"Heidelberg (Gp)","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Common robbery","incidents":"41","police_station":"Swartkops","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Gordons Bay","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Makwane","province":"Free State","year":"2012-2013"}
    ,{"crime":"Rape","incidents":"195","police_station":"Kanyamazane","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Shoplifting","incidents":"2","police_station":"Atamelang","province":"North West","year":"2006-2007"}
    ,{"crime":"Attempted murder","incidents":"37","police_station":"Kliptown","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"3","police_station":"Cramond","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Contact Crime","incidents":"147","police_station":"Stanford","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"246","police_station":"Caledon","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Commercial crime","incidents":"7","police_station":"Darling","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Property Related Crime","incidents":"412","police_station":"Buffalo Flats","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"388","police_station":"Ravensmead","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Property Related Crime","incidents":"25","police_station":"Gravelotte","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"104","police_station":"Jane Furse","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Murder","incidents":"136","police_station":"Gugulethu","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"2","police_station":"Pretoria Moot","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Batho","province":"Free State","year":"2006-2007"}
    ,{"crime":"Shoplifting","incidents":"6","police_station":"Wesselsbron","province":"Free State","year":"2015-2016"}
    ,{"crime":"Murder","incidents":"0","police_station":"Davel","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Burglary at residential premises","incidents":"38","police_station":"Ematsheni","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Commercial crime","incidents":"53","police_station":"Swartkops","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Boston","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Rape","police_station":"Sterkstroom","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Bethelsdorp","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Elliotdale","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Contact Crime","incidents":"201","police_station":"Mothotlung","province":"North West","year":"2010-2011"}
    ,{"crime":"Other Serious Crime","incidents":"291","police_station":"Bayview","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Robbery at residential premises","incidents":"2","police_station":"Atlantis","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Dieprivier","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Aggeneys","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Contact Crime","incidents":"533","police_station":"Sundumbili","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Sexual Offences","incidents":"26","police_station":"Bayview","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"1","police_station":"Hobhouse","province":"Free State","year":"2010-2011"}
    ,{"crime":"Murder","incidents":"3","police_station":"Camps Bay","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Diepsloot","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Attempted murder","incidents":"40","police_station":"Tsolo","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"37","police_station":"Eldorado Park","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Property Related Crime","incidents":"257","police_station":"Camperdown","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Common robbery","incidents":"81","police_station":"Mondlo","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Stock-theft","incidents":"43","police_station":"Lady Frere","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"12","police_station":"Emzinoni","province":"Mpumalanga","year":"2008-2009"}
    ,{"crime":"Common robbery","incidents":"9","police_station":"Blinkpan","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Common robbery","incidents":"75","police_station":"Cloetesville","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Arson","incidents":"1","police_station":"De Rust","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Burglary at residential premises","incidents":"108","police_station":"Maphumulo","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Burglary at non-residential premises","incidents":"22","police_station":"Gordons Bay","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Burglary at non-residential premises","incidents":"73","police_station":"De Aar","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Burglary at residential premises","incidents":"72","police_station":"Bathurst","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Burglary at residential premises","incidents":"470","police_station":"Rabie Ridge","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Kwa Thema","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Common robbery","incidents":"5","police_station":"Paul Roux","province":"Free State","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"18","police_station":"Klapmuts","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Common robbery","incidents":"5","police_station":"Thornville","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"452","police_station":"Yeoville","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Murder","incidents":"0","police_station":"Hoopdal","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Rape","incidents":"126","police_station":"Kanana","province":"North West","year":"2008-2009"}
    ,{"crime":"Drug-related crime","incidents":"24","police_station":"Roedtan","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Shoplifting","incidents":"147","police_station":"Eshowe","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Burglary at non-residential premises","incidents":"478","police_station":"George","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Property Related Crime","incidents":"42","police_station":"Mcgregor","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Sexual Offences","incidents":"4","police_station":"Strydenburg","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Verkeerdevlei","province":"Free State","year":"2010-2011"}
    ,{"crime":"Arson","incidents":"0","police_station":"Kwanokuthula","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"650","police_station":"Linden","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Attempted murder","incidents":"32","police_station":"Kwaggafontein","province":"Mpumalanga","year":"2008-2009"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"3","police_station":"Amsterdam","province":"Mpumalanga","year":"2007-2008"}
    ,{"crime":"Carjacking","incidents":"107","police_station":"Bayview","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Other Serious Crime","incidents":"692","police_station":"Vosloorus","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Stock-theft","incidents":"13","police_station":"Calitzdorp","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Common assault","incidents":"47","police_station":"Paterson","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"90","police_station":"Rabie Ridge","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Attempted sexual offences","incidents":"2","police_station":"Bedwang","province":"North West","year":"2011-2012"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Msobomvu","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"4529","police_station":"Durban Central","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"487","police_station":"Macassar","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"56","police_station":"Berlin","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Newcastle","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Burglary at residential premises","incidents":"4","police_station":"Committees","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"2212","police_station":"Table View","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Madikwe","province":"North West","year":"2015-2016"}
    ,{"crime":"Shoplifting","incidents":"6","police_station":"Crystalpark","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Contact Related Crime","incidents":"57","police_station":"Kwanokuthula","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Reivilo","province":"North West","year":"2010-2011"}
    ,{"crime":"Arson","incidents":"3","police_station":"Sunnyside","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Common assault","incidents":"39","police_station":"Petrusburg","province":"Free State","year":"2012-2013"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"62","police_station":"Mbekweni","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"45","police_station":"Tshidilamolomo","province":"North West","year":"2011-2012"}
    ,{"crime":"Common assault","incidents":"675","police_station":"Jeppe","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Drug-related crime","incidents":"9","police_station":"Mbazwana","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"1","police_station":"Port Nolloth","province":"Northern Cape","year":"2006-2007"}
    ,{"crime":"Commercial crime","incidents":"142","police_station":"Sydenham","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"67","police_station":"Matatiele","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"10","police_station":"Da Gamaskop","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"82","police_station":"Somerset West","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Stock-theft","incidents":"28","police_station":"Hluhluwe","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"376","police_station":"Taung","province":"North West","year":"2008-2009"}
    ,{"crime":"Attempted murder","incidents":"51","police_station":"Newlands East","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Arson","incidents":"2","police_station":"Lamontville","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Tyefu","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Robbery at non-residential premises","incidents":"31","police_station":"Sydenham","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Contact sexual offences","incidents":"1","police_station":"Batlharos","province":"Northern Cape","year":"2015-2016"}
    ,{"crime":"Other Serious Crime","incidents":"1928","police_station":"Somerset West","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"5","police_station":"Groot Brakrivier","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Zaaiplaas","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Contact Crime","incidents":"217","police_station":"Elliot","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Hogsback","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Rape","incidents":"8","police_station":"Bothasig","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Mpungamhlophe","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Attempted sexual offences","police_station":"Nottingham Road","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Klipplaat","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Commercial crime","incidents":"2","police_station":"Tshitale","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Rape","incidents":"78","police_station":"Ganyesa","province":"North West","year":"2014-2015"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"0","police_station":"Tulbagh","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Contact Related Crime","incidents":"58","police_station":"Lulekani","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Robbery at residential premises","incidents":"65","police_station":"Lenasia South","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"34","police_station":"Mphephu","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"864","police_station":"Lomanyaneng","province":"North West","year":"2009-2010"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"188","police_station":"Prince Albert","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"15","police_station":"Vanrhynsdorp","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Malicious damage to property","incidents":"4","police_station":"Loxton","province":"Northern Cape","year":"2011-2012"}
    ,{"crime":"Attempted murder","incidents":"6","police_station":"Hendrina","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"124","police_station":"Saselamani","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Contact Related Crime","incidents":"7","police_station":"Arlington","province":"Free State","year":"2012-2013"}
    ,{"crime":"Carjacking","incidents":"2","police_station":"Greylingstad","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Contact Related Crime","incidents":"21","police_station":"Donnybrook","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Drug-related crime","incidents":"61","police_station":"Mandeni","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Common assault","incidents":"46","police_station":"Grootvlei","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Attempted sexual offences","incidents":"5","police_station":"Franschhoek","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Steunmekaar","province":"Free State","year":"2005-2006"}
    ,{"crime":"Contact sexual offences","incidents":"1","police_station":"Rouxville","province":"Free State","year":"2012-2013"}
    ,{"crime":"Malicious damage to property","incidents":"2","police_station":"Deben","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Strandfontein","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Malicious damage to property","incidents":"12","police_station":"Kestell","province":"Free State","year":"2012-2013"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Kgomotso","province":"North West","year":"2016-2017"}
    ,{"crime":"Contact Related Crime","incidents":"25","police_station":"Glen Grey","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"TRIO Crimes","incidents":"4","police_station":"Volksrust","province":"Mpumalanga","year":"2008-2009"}
    ,{"crime":"Stock-theft","incidents":"2","police_station":"Umzinto","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Murder","incidents":"28","police_station":"Bethlehem","province":"Free State","year":"2006-2007"}
    ,{"crime":"Burglary at non-residential premises","incidents":"63","police_station":"Hebron","province":"North West","year":"2013-2014"}
    ,{"crime":"Stock-theft","incidents":"18","police_station":"Hoopstad","province":"Free State","year":"2008-2009"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Memel","province":"Free State","year":"2016-2017"}
    ,{"crime":"Contact sexual offences","police_station":"Ngqeleni","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Silverton","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Kwaggafontein","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Burglary at residential premises","incidents":"10","police_station":"Pilgrim'S Rest","province":"Mpumalanga","year":"2016-2017"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1626","police_station":"Phalaborwa","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Burglary at non-residential premises","incidents":"5","police_station":"Vanrhynsdorp","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Attempted sexual offences","incidents":"1","police_station":"Tabase","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Burglary at non-residential premises","incidents":"1","police_station":"Alice","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"0","police_station":"Westenburg","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Attempted sexual offences","incidents":"5","police_station":"Kwanobuhle","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Common robbery","incidents":"78","police_station":"Protea Glen","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Phokeng","province":"North West","year":"2009-2010"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"18","police_station":"Bluewater","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"17","police_station":"Grassy Park","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Rape","police_station":"Stutterheim","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Thornhill Ciskei","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"6","police_station":"Town Hill","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Common assault","incidents":"14","police_station":"Onseepkans","province":"Northern Cape","year":"2006-2007"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"0","police_station":"Glendale","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Attempted sexual offences","incidents":"0","police_station":"Kidds Beach","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Stock-theft","incidents":"26","police_station":"Stella","province":"North West","year":"2012-2013"}
    ,{"crime":"Arson","incidents":"0","police_station":"Klerkskraal","province":"North West","year":"2015-2016"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"67","police_station":"Umbilo","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Other Serious Crime","incidents":"3","police_station":"Rossouw","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"3","police_station":"Ezinqoleni","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Property Related Crime","incidents":"229","police_station":"Msinga","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"9","police_station":"Tsomo","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"375","police_station":"Tzaneen","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"65","police_station":"Assen","province":"North West","year":"2005-2006"}
    ,{"crime":"Sexual Assault","incidents":"6","police_station":"Vulindlela","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Robbery at residential premises","incidents":"5","police_station":"Hlanganani","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"202","police_station":"Makgobistad","province":"North West","year":"2006-2007"}
    ,{"crime":"Contact Crime","incidents":"94","police_station":"Oranjeville","province":"Free State","year":"2012-2013"}
    ,{"crime":"Burglary at residential premises","incidents":"6","police_station":"Plooysburg","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"2","police_station":"Hlanganani","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Prince Alfred Hamlet","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Robbery of cash in transit","incidents":"1","police_station":"Manenberg","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Commercial crime","incidents":"58","police_station":"Maitland","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Middledrift","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"2","police_station":"Tyefu","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"5","police_station":"Wepener","province":"Free State","year":"2008-2009"}
    ,{"crime":"Stock-theft","incidents":"0","police_station":"Kwandengane","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Burglary at non-residential premises","incidents":"2","police_station":"Morgenzon Transvaal","province":"Mpumalanga","year":"2013-2014"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"180","police_station":"Newlands East","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Pella","province":"Northern Cape","year":"2005-2006"}
    ,{"crime":"Contact Crime","incidents":"197","police_station":"Gordons Bay","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Property Related Crime","incidents":"1899","police_station":"Chatsworth","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"177","police_station":"Kameeldrift","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Sexual Assault","police_station":"Sharpeville","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Commercial crime","incidents":"77","police_station":"Nyanga","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Property Related Crime","incidents":"130","police_station":"Afsondering","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Sexual Assault","incidents":"16","police_station":"Strand","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Robbery at residential premises","incidents":"18","police_station":"Eldorado Park","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Other Serious Crime","incidents":"234","police_station":"Melmoth","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Burglary at non-residential premises","incidents":"118","police_station":"Bothaville","province":"Free State","year":"2006-2007"}
    ,{"crime":"Arson","incidents":"0","police_station":"Dingleton","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Sexual Assault","incidents":"7","police_station":"Jozini","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"573","police_station":"Camps Bay","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Contact Crime","incidents":"55","police_station":"Klerkskraal","province":"North West","year":"2007-2008"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"20","police_station":"Grootvlei","province":"Mpumalanga","year":"2015-2016"}
    ,{"crime":"Robbery at non-residential premises","incidents":"29","police_station":"Rosebank","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Common robbery","incidents":"64","police_station":"Sinoville","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Sexual Offences","incidents":"11","police_station":"Morebeng","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Lephalale","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Stella","province":"North West","year":"2006-2007"}
    ,{"crime":"Common assault","incidents":"40","police_station":"Wepener","province":"Free State","year":"2013-2014"}
    ,{"crime":"Arson","incidents":"1","police_station":"Bainsvlei","province":"Free State","year":"2014-2015"}
    ,{"crime":"Contact Crime","incidents":"306","police_station":"Malvern","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"545","police_station":"Sabie","province":"Mpumalanga","year":"2011-2012"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Scottburgh","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Attempted murder","incidents":"37","police_station":"Calcutta","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Other Serious Crime","incidents":"192","police_station":"Christiana","province":"North West","year":"2013-2014"}
    ,{"crime":"Rape","incidents":"65","police_station":"Kanyamazane","province":"Mpumalanga","year":"2012-2013"}
    ,{"crime":"Murder","incidents":"41","police_station":"Springs","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"73","police_station":"Machadodorp","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"1","police_station":"Willowvale","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Drug-related crime","incidents":"166","police_station":"East London","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"18","police_station":"Oudtshoorn","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Nsuze","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"2264","police_station":"Lenasia South","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Commercial crime","incidents":"80","police_station":"Mmabatho","province":"North West","year":"2010-2011"}
    ,{"crime":"Burglary at residential premises","incidents":"48","police_station":"Madibogo","province":"North West","year":"2007-2008"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"337","police_station":"Tembisa","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"29","police_station":"Glen","province":"Free State","year":"2009-2010"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Verkeerdevlei","province":"Free State","year":"2012-2013"}
    ,{"crime":"Common robbery","incidents":"23","police_station":"Amersfoort","province":"Mpumalanga","year":"2011-2012"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"20","police_station":"Highflats","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Robbery of cash in transit","incidents":"1","police_station":"Vredenburg","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"146","police_station":"Vaalbank","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Common assault","incidents":"80","police_station":"Cofimvaba","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Common assault","incidents":"94","police_station":"Koffiefontein","province":"Free State","year":"2009-2010"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"5","police_station":"Clocolan","province":"Free State","year":"2015-2016"}
    ,{"crime":"Common assault","incidents":"84","police_station":"Utrecht","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Robbery at non-residential premises","incidents":"3","police_station":"Tarlton","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"288","police_station":"Harrismith","province":"Free State","year":"2010-2011"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Dordrecht","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"54","police_station":"Kathu","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Pella","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"27","police_station":"Mandeni","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Thornhill","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"5","police_station":"Harding","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"1334","police_station":"Kempton Park","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"0","police_station":"Makuya","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"22","police_station":"Dutywa","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Commercial crime","incidents":"16","police_station":"Paulpietersburg","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Contact Crime","incidents":"307","police_station":"Kensington","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Other Serious Crime","incidents":"64","police_station":"Pudimoe","province":"North West","year":"2016-2017"}
    ,{"crime":"Stock-theft","incidents":"0","police_station":"Rosebank","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Robbery at non-residential premises","incidents":"10","police_station":"Lethabong","province":"North West","year":"2009-2010"}
    ,{"crime":"Murder","incidents":"6","police_station":"Harburg","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Wasbank","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Burglary at non-residential premises","incidents":"54","police_station":"Tshaulu","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Shoplifting","incidents":"11","police_station":"Carolina","province":"Mpumalanga","year":"2011-2012"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Dullstroom","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Common robbery","incidents":"0","police_station":"Onseepkans","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Contact sexual offences","incidents":"2","police_station":"Selosesha","province":"Free State","year":"2013-2014"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Roossenekal","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Healdtown","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Contact Crime","incidents":"164","police_station":"The Barrage","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"4","police_station":"Carnarvon","province":"Northern Cape","year":"2015-2016"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Brandvlei","province":"Northern Cape","year":"2006-2007"}
    ,{"crime":"Robbery at non-residential premises","incidents":"31","police_station":"Lwandle","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Vaalbank","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Robbery at residential premises","incidents":"15","police_station":"Mangaung","province":"Free State","year":"2014-2015"}
    ,{"crime":"Shoplifting","incidents":"1","police_station":"Steinkopf","province":"Northern Cape","year":"2008-2009"}
    ,{"crime":"Other Serious Crime","incidents":"105","police_station":"Prestbury","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Robbery at non-residential premises","incidents":"2","police_station":"De Aar","province":"Northern Cape","year":"2008-2009"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Dundee","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Sexual Assault","incidents":"9","police_station":"Christiana","province":"North West","year":"2010-2011"}
    ,{"crime":"Commercial crime","incidents":"1","police_station":"Rietfontein","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Commercial crime","incidents":"2","police_station":"Alicedale","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Common assault","incidents":"55","police_station":"Zele","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Saldanha","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"1","police_station":"Lady Frere","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Malicious damage to property","incidents":"18","police_station":"Alicedale","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Other Serious Crime","incidents":"1645","police_station":"Atteridgeville","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Drug-related crime","incidents":"47","police_station":"Daveyton","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"75","police_station":"Kwambonambi","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"242","police_station":"Warrenton","province":"Northern Cape","year":"2005-2006"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"73","police_station":"Paddock","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"4","police_station":"Ngodwana","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Springbok","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"661","police_station":"Da Gamaskop","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Malicious damage to property","incidents":"9","police_station":"Boons","province":"North West","year":"2012-2013"}
    ,{"crime":"Common robbery","incidents":"54","police_station":"Newlands East","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"4","police_station":"Winterton","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"1494","police_station":"Inanda","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Attempted sexual offences","incidents":"0","police_station":"Port Nolloth","province":"Northern Cape","year":"2011-2012"}
    ,{"crime":"Contact Crime","incidents":"1036","police_station":"Westenburg","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Dwaalboom","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Ivory Park","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Common robbery","incidents":"134","police_station":"Mokopane","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Stock-theft","incidents":"7","police_station":"Inyibiba","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"1","police_station":"Fort Brown","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Property Related Crime","incidents":"1193","police_station":"Boksburg","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Other Serious Crime","incidents":"573","police_station":"Musina","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"58","police_station":"Giyani","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"16","police_station":"Margate","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"2096","police_station":"Embalenhle","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"259","police_station":"Port Alfred","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Common assault","incidents":"60","police_station":"Gingindlovu","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"44","police_station":"Pienaarsrivier","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Malicious damage to property","incidents":"177","police_station":"Kopanong","province":"Free State","year":"2016-2017"}
    ,{"crime":"Commercial crime","incidents":"101","police_station":"Kwaggafontein","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"255","police_station":"Ocean View","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"11","police_station":"Burgersdorp","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"181","police_station":"Calcutta","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Contact sexual offences","incidents":"3","police_station":"Bedfordview","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"104","police_station":"Grassy Park","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Other Serious Crime","incidents":"387","police_station":"Tokoza","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"1","police_station":"Phumalanga","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"24","police_station":"Suurbraak","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Burglary at non-residential premises","incidents":"65","police_station":"Motherwell","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"De Deur","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Drug-related crime","incidents":"36","police_station":"Marquard","province":"Free State","year":"2009-2010"}
    ,{"crime":"Truck hijacking","incidents":"1","police_station":"Machadodorp","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Contact Related Crime","incidents":"105","police_station":"Umhlali","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Richmond-Kzn","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Malicious damage to property","incidents":"117","police_station":"Kanana","province":"North West","year":"2005-2006"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"737","police_station":"Douglasdale","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"26","police_station":"Rietvlei","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1198","police_station":"Theunissen","province":"Free State","year":"2010-2011"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Katkop","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"New Brighton","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"900","police_station":"Macassar","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Burglary at non-residential premises","incidents":"11","police_station":"Jericho","province":"North West","year":"2015-2016"}
    ,{"crime":"Sexual Offences","incidents":"2","police_station":"Cumberland","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Kwanobuhle","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"16","police_station":"Cape Town Central","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"0","police_station":"Nhlanhleni","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Arson","incidents":"10","police_station":"Madikwe","province":"North West","year":"2010-2011"}
    ,{"crime":"Robbery of cash in transit","incidents":"1","police_station":"Mayville-Kzn","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"295","police_station":"Villiersdorp","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Murder","incidents":"10","police_station":"Steenberg","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"87","police_station":"Vryheid","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Contact Related Crime","incidents":"322","police_station":"Steenberg","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"38","police_station":"Weenen","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"20","police_station":"Jagersfontein","province":"Free State","year":"2014-2015"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"11","police_station":"Ceza","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Other Serious Crime","incidents":"0","police_station":"Elands Height","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"34","police_station":"Cumberland","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Sexual Offences","incidents":"4","police_station":"Steinkopf","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"0","police_station":"Komaggas","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"14","police_station":"Springbok","province":"Northern Cape","year":"2008-2009"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"270","police_station":"Smithfield","province":"Free State","year":"2015-2016"}
    ,{"crime":"Contact sexual offences","police_station":"Hartswater","province":"Northern Cape","year":"2006-2007"}
    ,{"crime":"Malicious damage to property","incidents":"12","police_station":"Mtontsasa","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Robbery of cash in transit","incidents":"1","police_station":"Nyanga","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Murder","incidents":"57","police_station":"Kwadukuza","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Commercial crime","incidents":"5","police_station":"St Helena Bay","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Common assault","incidents":"369","police_station":"Brakpan","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Jacobsdal","province":"Free State","year":"2012-2013"}
    ,{"crime":"Attempted sexual offences","incidents":"0","police_station":"Cramond","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Drug-related crime","incidents":"0","police_station":"Tembisa South","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Burglary at residential premises","incidents":"90","police_station":"Tshilwavhusiku","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Bulwer","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Attempted murder","incidents":"3","police_station":"Levubu","province":"Limpopo","year":"2012-2013"}
    ,{"crime":"Commercial crime","incidents":"133","police_station":"Fish Hoek","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Truck hijacking","incidents":"1","police_station":"Estcourt","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Contact Related Crime","incidents":"112","police_station":"Kwamsane","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Attempted sexual offences","incidents":"0","police_station":"Sutherland","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Contact Related Crime","incidents":"368","police_station":"Orlando","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Contact sexual offences","police_station":"Whittlesea","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Robbery at residential premises","incidents":"13","police_station":"Ntabamhlophe","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Attempted murder","incidents":"43","police_station":"Cleveland","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Property Related Crime","incidents":"698","police_station":"Crystalpark","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"TRIO Crimes","incidents":"2","police_station":"Upper Tugela","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Arson","incidents":"3","police_station":"Sawoti","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Arson","incidents":"0","police_station":"Hopefield","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Mara","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Lansdowne","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Shoplifting","incidents":"104","police_station":"Mdantsane","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Property Related Crime","incidents":"4","police_station":"Van Zylsrus","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Arson","incidents":"7","police_station":"Boschkop","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"64","police_station":"Kroonstad","province":"Free State","year":"2009-2010"}
    ,{"crime":"Carjacking","incidents":"9","police_station":"Malelane","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Drug-related crime","incidents":"35","police_station":"Nigel","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Attempted murder","incidents":"43","police_station":"Eldorado Park","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Malicious damage to property","incidents":"105","police_station":"Westville","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Common robbery","incidents":"29","police_station":"Malvern","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Pella","province":"Northern Cape","year":"2008-2009"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"135","police_station":"Orlando","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Robbery at non-residential premises","incidents":"21","police_station":"Ekangala","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Drug-related crime","incidents":"5","police_station":"Windsorton","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"623","police_station":"Midrand","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Other Serious Crime","incidents":"81","police_station":"Cyferskuil","province":"North West","year":"2014-2015"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Kaapmuiden","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"269","police_station":"Vanderbijlpark","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Struisbaai","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Common assault","incidents":"46","police_station":"Klapmuts","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Robbery at residential premises","incidents":"67","police_station":"Boksburg","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"28","police_station":"Zebediela","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Rakgoadi","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Rape","incidents":"25","police_station":"Nsuze","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Elandskraal","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"6","police_station":"Rossouw","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Contact Crime","incidents":"13","police_station":"Bray","province":"North West","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"1","police_station":"Saamboubrug","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Contact Crime","incidents":"141","police_station":"Swartruggens","province":"North West","year":"2012-2013"}
    ,{"crime":"TRIO Crimes","incidents":"1","police_station":"Dullstroom","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Sexual Offences","incidents":"6","police_station":"Ekulindeni","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Burglary at residential premises","incidents":"27","police_station":"Dalton","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"1","police_station":"Roedtan","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Murder","incidents":"0","police_station":"Ingogo","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Burglary at non-residential premises","incidents":"53","police_station":"Sydenham","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Contact Related Crime","incidents":"334","police_station":"Strand","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1019","police_station":"Bloemhof","province":"North West","year":"2012-2013"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Morokweng","province":"North West","year":"2005-2006"}
    ,{"crime":"Attempted sexual offences","police_station":"Scenery Park","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Drug-related crime","incidents":"216","police_station":"Albertinia","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Rooiberg","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Contact Crime","incidents":"1076","police_station":"Sophia Town","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Shoplifting","incidents":"110","police_station":"Bela-Bela","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Attempted sexual offences","police_station":"Belfast","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"42","police_station":"Katkop","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"0","police_station":"Garies","province":"Northern Cape","year":"2015-2016"}
    ,{"crime":"Drug-related crime","incidents":"183","police_station":"Hillcrest","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Sexual Assault","incidents":"1","police_station":"Hobhouse","province":"Free State","year":"2015-2016"}
    ,{"crime":"Common assault","incidents":"798","police_station":"Temba","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"402","police_station":"Sun City","province":"North West","year":"2014-2015"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Kraaifontein","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"0","police_station":"Avondale","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"8","police_station":"Bell","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Attempted murder","incidents":"31","police_station":"Pietermaritzburg","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Sexual Offences","incidents":"58","police_station":"Bloemhof","province":"North West","year":"2011-2012"}
    ,{"crime":"Other Serious Crime","incidents":"85","police_station":"Ntabamhlophe","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"2","police_station":"Rietvlei","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Contact Crime","incidents":"102","police_station":"Chalumna","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Burglary at residential premises","incidents":"1189","police_station":"Sandton","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Robbery at residential premises","incidents":"2","police_station":"Punzana","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Contact Related Crime","incidents":"1","police_station":"Fort Brown","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"7","police_station":"Val","province":"Mpumalanga","year":"2013-2014"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"215","police_station":"Milnerton","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"502","police_station":"Caledon","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Shoplifting","incidents":"1","police_station":"Genadendal","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Burglary at non-residential premises","incidents":"41","police_station":"Roodepan","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"38","police_station":"Vrede","province":"Free State","year":"2005-2006"}
    ,{"crime":"Commercial crime","incidents":"7","police_station":"Glen","province":"Free State","year":"2012-2013"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Swartberg","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"TRIO Crimes","incidents":"2","police_station":"Devon","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"165","police_station":"Ulundi","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Common robbery","incidents":"328","police_station":"Bishop Lavis","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Hartbeesfontein","province":"North West","year":"2009-2010"}
    ,{"crime":"Contact Related Crime","incidents":"40","police_station":"Gingindlovu","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Robbery at residential premises","incidents":"10","police_station":"Ekuvukeni","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"20","police_station":"Meloding","province":"Free State","year":"2011-2012"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"641","police_station":"Allanridge","province":"Free State","year":"2005-2006"}
    ,{"crime":"Truck hijacking","incidents":"1","police_station":"Daveyton","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Attempted murder","incidents":"48","police_station":"Hillcrest","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"TRIO Crimes","incidents":"9","police_station":"Whittlesea","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"TRIO Crimes","incidents":"165","police_station":"Phoenix","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Lomanyaneng","province":"North West","year":"2011-2012"}
    ,{"crime":"Contact Crime","incidents":"194","police_station":"Vredefort","province":"Free State","year":"2012-2013"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"128","police_station":"Kliprivier","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Burglary at non-residential premises","incidents":"94","police_station":"Westville","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"52","police_station":"Mpumalanga KZN","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Commercial crime","incidents":"8","police_station":"Machadodorp","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Stock-theft","incidents":"3","police_station":"Mara","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Arson","incidents":"5","police_station":"Hlababomvu","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Cloetesville","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Malicious damage to property","incidents":"445","police_station":"Alberton","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Common robbery","incidents":"17","police_station":"Mount Ayliff","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Common robbery","incidents":"0","police_station":"Hogsback","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"287","police_station":"Barrydale","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Burglary at residential premises","incidents":"112","police_station":"Hoedspruit","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Contact sexual offences","police_station":"Jhb Central","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Burglary at residential premises","incidents":"86","police_station":"Waterval Boven","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Other Serious Crime","incidents":"451","police_station":"Rabie Ridge","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Contact Related Crime","incidents":"4","police_station":"Cornelia","province":"Free State","year":"2009-2010"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"664","police_station":"Koster","province":"North West","year":"2011-2012"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"1","police_station":"Franklin","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Contact Crime","incidents":"257","police_station":"Burgersfort","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"11","police_station":"Kwanobuhle","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Klapmuts","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"160","police_station":"Mdantsane","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Ingwavuma","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Sexual Offences","incidents":"12","police_station":"Tshidilamolomo","province":"North West","year":"2011-2012"}
    ,{"crime":"Carjacking","incidents":"6","police_station":"Kensington","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"783","police_station":"Mafube","province":"Free State","year":"2015-2016"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Zonkizizwe","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Property Related Crime","incidents":"712","police_station":"Kwazakele","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Sexual Offences","incidents":"119","police_station":"Yeoville","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Robbery of cash in transit","incidents":"2","police_station":"Dieprivier","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"TRIO Crimes","incidents":"271","police_station":"Cleveland","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1244","police_station":"Vuwani","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Rape","incidents":"79","police_station":"Umkomaas","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Drug-related crime","incidents":"17","police_station":"Tshaulu","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Rape","incidents":"145","police_station":"Vosman","province":"Mpumalanga","year":"2012-2013"}
    ,{"crime":"Attempted murder","incidents":"28","police_station":"Hercules","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Malicious damage to property","incidents":"33","police_station":"Greylingstad","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Common assault","incidents":"44","police_station":"Komatipoort","province":"Mpumalanga","year":"2012-2013"}
    ,{"crime":"Attempted sexual offences","incidents":"2","police_station":"Lwandle","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"282","police_station":"Kirkwood","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Sexual Offences","incidents":"49","police_station":"Lwandle","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Commercial crime","incidents":"23","police_station":"Malamulele","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"327","police_station":"Ladysmith","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Rape","incidents":"10","police_station":"Strandfontein","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Burglary at non-residential premises","incidents":"106","police_station":"Nongoma","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Attempted sexual offences","incidents":"1","police_station":"Chalumna","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Burglary at residential premises","incidents":"251","police_station":"Heidedal","province":"Free State","year":"2012-2013"}
    ,{"crime":"Other Serious Crime","incidents":"101","police_station":"Amsterdam","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"39","police_station":"Kestell","province":"Free State","year":"2014-2015"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Klipgat","province":"North West","year":"2016-2017"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"1","police_station":"Heidelberg(C)","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Attempted murder","incidents":"122","police_station":"Jhb Central","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Rape","incidents":"12","police_station":"Hofmeyr","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"21","police_station":"Ekuvukeni","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"921","police_station":"Hlogotlou","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Rape","incidents":"91","police_station":"Jeppe","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Commercial crime","incidents":"10","police_station":"Ikamvelihle","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"0","police_station":"Dorset","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"13","police_station":"Vredenburg","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Common robbery","incidents":"57","police_station":"Aliwal North","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"0","police_station":"Bothithong","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Robbery at residential premises","incidents":"33","police_station":"Kwamhlanga","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Tubatse","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"18","police_station":"Bayswater","province":"Free State","year":"2011-2012"}
    ,{"crime":"Burglary at non-residential premises","incidents":"156","police_station":"Oudtshoorn","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Common robbery","incidents":"34","police_station":"Wolmaransstad","province":"North West","year":"2005-2006"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"33","police_station":"Motherwell","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"3","police_station":"Wanda","province":"Free State","year":"2005-2006"}
    ,{"crime":"Contact Related Crime","incidents":"72","police_station":"Rawsonville","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Bloemhof","province":"North West","year":"2005-2006"}
    ,{"crime":"Attempted murder","incidents":"3","police_station":"Stutterheim","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Robbery at residential premises","incidents":"1","police_station":"Haenertsburg","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Rape","incidents":"12","police_station":"Tshaulu","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"1","police_station":"Vioolsdrif","province":"Northern Cape","year":"2016-2017"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"0","police_station":"De Aar","province":"Northern Cape","year":"2011-2012"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Bainsvlei","province":"Free State","year":"2012-2013"}
    ,{"crime":"Drug-related crime","incidents":"119","police_station":"Emzinoni","province":"Mpumalanga","year":"2013-2014"}
    ,{"crime":"Common robbery","incidents":"91","police_station":"Masoyi","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Sexual Offences","incidents":"18","police_station":"Augrabies","province":"Northern Cape","year":"2015-2016"}
    ,{"crime":"Commercial crime","incidents":"10","police_station":"Kabokweni","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Sexual Offences","incidents":"48","police_station":"Mount Road","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Rape","police_station":"Kareedouw","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"1","police_station":"Ganyesa","province":"North West","year":"2013-2014"}
    ,{"crime":"Malicious damage to property","incidents":"2","police_station":"Ezibayeni","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Contact sexual offences","incidents":"7","police_station":"Fochville","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"0","police_station":"Piet Plessis","province":"North West","year":"2015-2016"}
    ,{"crime":"Contact Related Crime","incidents":"945","police_station":"Krugersdorp","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Soutpan","province":"Free State","year":"2014-2015"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"761","police_station":"Boksburg North","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Attempted murder","incidents":"4","police_station":"Graaff-Reinet","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Malicious damage to property","incidents":"3","police_station":"Wolwefontein","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"24","police_station":"Tarlton","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Contact Crime","incidents":"686","police_station":"Wynberg","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"3","police_station":"Tweeling","province":"Free State","year":"2014-2015"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Mitchells Plain","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Contact sexual offences","police_station":"Mlungisi","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Common assault","incidents":"4","police_station":"Noenieput","province":"Northern Cape","year":"2015-2016"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"132","police_station":"Hankey","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Nieuwoudtville","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Ezibayeni","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"2433","police_station":"Meyerton","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"13","police_station":"Makhado","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"25","police_station":"Springbok","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Burglary at residential premises","incidents":"58","police_station":"Ntambanana","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Contact sexual offences","police_station":"Carletonville","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Robbery at non-residential premises","incidents":"5","police_station":"Bronkhorstspruit","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Malicious damage to property","incidents":"48","police_station":"Mutale","province":"Limpopo","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"195","police_station":"Buffalo Flats","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Drug-related crime","incidents":"146","police_station":"Umzimkhulu","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Contact Related Crime","incidents":"18","police_station":"Aberdeen","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Burglary at residential premises","incidents":"65","police_station":"Jamestown","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Common robbery","incidents":"19","police_station":"Ixopo","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Sexual Offences","incidents":"0","police_station":"Brits","province":"North West","year":"2007-2008"}
    ,{"crime":"Carjacking","incidents":"25","police_station":"Kwamhlanga","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"344","police_station":"Langa","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"60","police_station":"Mbizana","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Arson","incidents":"7","police_station":"Actonville","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Rape","incidents":"0","police_station":"Diepsloot","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"TRIO Crimes","incidents":"2","police_station":"Ikageng","province":"North West","year":"2005-2006"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"11","police_station":"Norwood","province":"Gauteng","year":"2009-2010"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"10","police_station":"Afsondering","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Sexual Offences","incidents":"198","police_station":"Moroka","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Burglary at non-residential premises","incidents":"6","police_station":"Colenso","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Vaal Marina","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Commercial crime","incidents":"8","police_station":"Lindley","province":"Free State","year":"2011-2012"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"6","police_station":"Senekal","province":"Free State","year":"2005-2006"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"2","police_station":"Augrabies","province":"Northern Cape","year":"2009-2010"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Morebeng","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Robbery at residential premises","incidents":"24","police_station":"Welbekend","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Malicious damage to property","incidents":"58","police_station":"Koffiefontein","province":"Free State","year":"2013-2014"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"12","police_station":"Sandton","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"18","police_station":"Waterval","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Shoplifting","incidents":"187","police_station":"Kwanonqaba","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Attempted sexual offences","police_station":"Jabulani","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Murder","incidents":"2","police_station":"Langebaan","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Arson","incidents":"0","police_station":"Waterpoort","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"1","police_station":"Aberdeen","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Attempted murder","incidents":"5","police_station":"Nemato","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Drug-related crime","incidents":"22","police_station":"Paul Roux","province":"Free State","year":"2015-2016"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"4505","police_station":"Rietgat","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Contact sexual offences","incidents":"1","police_station":"Estcourt","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Attempted murder","incidents":"12","police_station":"Wolmaransstad","province":"North West","year":"2008-2009"}
    ,{"crime":"Rape","incidents":"48","police_station":"Wesselsbron","province":"Free State","year":"2011-2012"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"1","police_station":"Morokweng","province":"North West","year":"2009-2010"}
    ,{"crime":"Other Serious Crime","incidents":"29","police_station":"Dorset","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Wesselsbron","province":"Free State","year":"2009-2010"}
    ,{"crime":"Attempted sexual offences","incidents":"1","police_station":"Barberton","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Robbery at residential premises","incidents":"33","police_station":"Mtubatuba","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Sexual Assault","incidents":"2","police_station":"Welbekend","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"67","police_station":"Zastron","province":"Free State","year":"2016-2017"}
    ,{"crime":"Attempted sexual offences","police_station":"Pabalello","province":"Northern Cape","year":"2006-2007"}
    ,{"crime":"TRIO Crimes","incidents":"21","police_station":"Port Edward","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Burglary at non-residential premises","incidents":"126","police_station":"Isipingo","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Burglary at residential premises","incidents":"349","police_station":"Calcutta","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"83","police_station":"Ndevana","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"5","police_station":"Mkhuze","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Commercial crime","incidents":"641","police_station":"Sunnyside","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Stock-theft","incidents":"53","police_station":"Molteno","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"53","police_station":"Vuwani","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Burglary at residential premises","incidents":"100","police_station":"Qumbu","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"41","police_station":"Maake","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Sexual Assault","police_station":"Hartbeespoortdam","province":"North West","year":"2007-2008"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"19","police_station":"Taylors Halt","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Rape","incidents":"17","police_station":"Elandskraal","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Drug-related crime","incidents":"294","police_station":"Kirstenhof","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Sexual Assault","police_station":"Umkomaas","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Contact Related Crime","incidents":"44","police_station":"Pudimoe","province":"North West","year":"2007-2008"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"165","police_station":"Makhado","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Commercial crime","incidents":"3","police_station":"Hlobane","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Contact sexual offences","police_station":"Joubertina","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Commercial crime","incidents":"6","police_station":"Wesselsbron","province":"Free State","year":"2011-2012"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Delft","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Stock-theft","incidents":"22","police_station":"Buffelshoek","province":"North West","year":"2007-2008"}
    ,{"crime":"Sexual Offences","incidents":"17","police_station":"Tshitale","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Drug-related crime","incidents":"122","police_station":"Daveyton","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Kolomane","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"1","police_station":"Leboeng","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"TRIO Crimes","incidents":"244","police_station":"Rustenburg","province":"North West","year":"2015-2016"}
    ,{"crime":"Malicious damage to property","incidents":"237","police_station":"Booysens","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Kabega Park","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Wrenchville","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"303","police_station":"Esikhaleni","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"526","police_station":"Riversdale","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"11","police_station":"Mehlomnyama","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Suurbraak","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"63","police_station":"Ventersburg","province":"Free State","year":"2014-2015"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"53","police_station":"Mara","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Contact Related Crime","incidents":"12","police_station":"Hofmeyr","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Burglary at non-residential premises","incidents":"10","police_station":"Mayflower","province":"Mpumalanga","year":"2006-2007"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"87","police_station":"Letlhabile","province":"North West","year":"2012-2013"}
    ,{"crime":"Carjacking","incidents":"4","police_station":"Table View","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Common assault","incidents":"89","police_station":"Humansdorp","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"113","police_station":"Plessislaer","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Boithuso","province":"Free State","year":"2006-2007"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"32","police_station":"Muldersdrift","province":"Gauteng","year":"2010-2011"}
    ,{"crime":"Drug-related crime","incidents":"8","police_station":"Hogsback","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Burglary at non-residential premises","incidents":"5","police_station":"Sutherland","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1260","police_station":"Wesselsbron","province":"Free State","year":"2013-2014"}
    ,{"crime":"Rape","police_station":"Vereeniging","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Stock-theft","incidents":"141","police_station":"Nongoma","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Burglary at non-residential premises","incidents":"47","police_station":"Mhluzi","province":"Mpumalanga","year":"2007-2008"}
    ,{"crime":"Other Serious Crime","incidents":"122","police_station":"Port Edward","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Villa Nora","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"5","police_station":"Bethanie","province":"North West","year":"2006-2007"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"580","police_station":"Bonnievale","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Truck hijacking","incidents":"1","police_station":"Kroonstad","province":"Free State","year":"2007-2008"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Mabopane","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Robbery at residential premises","incidents":"18","police_station":"Ntabankulu","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Attempted murder","incidents":"3","police_station":"Mothotlung","province":"North West","year":"2007-2008"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"151","police_station":"Ngangelizwe","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Robbery at residential premises","incidents":"1","police_station":"Zebediela","province":"Limpopo","year":"2005-2006"}
    ,{"crime":"Robbery at non-residential premises","incidents":"7","police_station":"Middledrift","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Sexual Assault","incidents":"4","police_station":"Makwane","province":"Free State","year":"2010-2011"}
    ,{"crime":"Other Serious Crime","incidents":"12","police_station":"Van Stadensrus","province":"Free State","year":"2016-2017"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"1261","police_station":"Vereeniging","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Truck hijacking","incidents":"6","police_station":"Ladysmith","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Drug-related crime","incidents":"19","police_station":"Leslie","province":"Mpumalanga","year":"2007-2008"}
    ,{"crime":"Sexual Offences","incidents":"10","police_station":"Bellair","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Murder","incidents":"42","police_station":"Ladysmith","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Contact Crime","incidents":"85","police_station":"Dalton","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"136","police_station":"Deneysville","province":"Free State","year":"2011-2012"}
    ,{"crime":"Burglary at residential premises","incidents":"20","police_station":"Makuya","province":"Limpopo","year":"2014-2015"}
    ,{"crime":"Common assault","incidents":"5","police_station":"Swartruggens","province":"North West","year":"2014-2015"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"32","police_station":"Stanford","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Other Serious Crime","incidents":"23","police_station":"Heuningspruit","province":"Free State","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"6562","police_station":"Chatsworth","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Contact Related Crime","incidents":"34","police_station":"Town Hill","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"TRIO Crimes","incidents":"23","police_station":"Maphumulo","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Property Related Crime","incidents":"40","police_station":"Loeriesfontein","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Burglary at non-residential premises","incidents":"73","police_station":"Kliptown","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Burglary at residential premises","incidents":"30","police_station":"Vierfontein","province":"Free State","year":"2008-2009"}
    ,{"crime":"Contact Crime","incidents":"1945","police_station":"East London","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"47","police_station":"Huhudi","province":"North West","year":"2016-2017"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Zamuxolo","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Robbery at residential premises","incidents":"9","police_station":"Beacon Bay","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Rape","police_station":"Itsoseng","province":"North West","year":"2006-2007"}
    ,{"crime":"Drug-related crime","incidents":"1","police_station":"Saamboubrug","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Attempted murder","incidents":"2","police_station":"Witrivier","province":"Mpumalanga","year":"2016-2017"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Afsondering","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"60","police_station":"Bedford","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"7","police_station":"Bronville","province":"Free State","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"1304","police_station":"Grahamstown","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"TRIO Crimes","incidents":"1","police_station":"Louwsburg","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"4","police_station":"Elandskraal","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Burglary at residential premises","incidents":"310","police_station":"Newlands East","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"5","police_station":"Umbumbulu","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Property Related Crime","incidents":"81","police_station":"Griekwastad","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Bridge Camp","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Stock-theft","incidents":"8","police_station":"Montagu","province":"Western Cape","year":"2011-2012"}
    ,{"crime":"Contact sexual offences","police_station":"Kagiso","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Contact Related Crime","incidents":"20","police_station":"Victoria West","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Shoplifting","incidents":"1","police_station":"Nuwerus","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Burglary at residential premises","incidents":"824","police_station":"Durbanville","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Murder","incidents":"20","police_station":"Actonville","province":"Gauteng","year":"2005-2006"}
    ,{"crime":"Sexual Offences","incidents":"9","police_station":"Struisbaai","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Stock-theft","incidents":"2","police_station":"Vredendal","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Drug-related crime","incidents":"385","police_station":"Umzinto","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"3","police_station":"Mbizeni","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Stock-theft","incidents":"9","police_station":"Southport","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"0","police_station":"Oranjeville","province":"Free State","year":"2008-2009"}
    ,{"crime":"Arson","incidents":"14","police_station":"Kwadukuza","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Contact Related Crime","incidents":"64","police_station":"Warrenton","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Drug-related crime","incidents":"33","police_station":"Nottingham Road","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Malicious damage to property","incidents":"58","police_station":"Mpumalanga KZN","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Hout Bay","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"0","police_station":"Pienaar","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"Rape","incidents":"30","police_station":"Midrand","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"42","police_station":"Villiersdorp","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Evatt","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Attempted sexual offences","incidents":"3","police_station":"Muizenberg","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"805","police_station":"Tokoza","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"22","police_station":"Hartebeeskop","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Robbery at residential premises","incidents":"3","police_station":"Blinkpan","province":"Mpumalanga","year":"2012-2013"}
    ,{"crime":"TRIO Crimes","incidents":"0","police_station":"Kanoneiland","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"33","police_station":"Mphephu","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Attempted sexual offences","police_station":"Mmabatho","province":"North West","year":"2005-2006"}
    ,{"crime":"Sexual Assault","incidents":"0","police_station":"Ogies","province":"Mpumalanga","year":"2016-2017"}
    ,{"crime":"Other Serious Crime","incidents":"397","police_station":"Mount Frere","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Bergville","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Malicious damage to property","incidents":"102","police_station":"Nigel","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Property Related Crime","incidents":"47","police_station":"Fraserburg","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"TRIO Crimes","incidents":"1","police_station":"Phumalanga","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Robbery at non-residential premises","incidents":"11","police_station":"Morgenzon Transvaal","province":"Mpumalanga","year":"2015-2016"}
    ,{"crime":"Common robbery","incidents":"24","police_station":"Vuwani","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Stock-theft","incidents":"20","police_station":"Sannieshof","province":"North West","year":"2009-2010"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Pretoria Central","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Common robbery","incidents":"17","police_station":"Wedela","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Arson","incidents":"7","police_station":"Boithuso","province":"Free State","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"97","police_station":"Wasbank","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"1","police_station":"Babanango","province":"Kwazulu/Natal","year":"2006-2007"}
    ,{"crime":"Stock-theft","incidents":"65","police_station":"Helpmekaar","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Burglary at non-residential premises","incidents":"37","police_station":"Despatch","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Contact Related Crime","incidents":"100","police_station":"Lomanyaneng","province":"North West","year":"2006-2007"}
    ,{"crime":"Arson","incidents":"2","police_station":"Langebaan","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Common robbery","incidents":"28","police_station":"Kwadwesi","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Burglary at residential premises","incidents":"3","police_station":"Mokopong","province":"North West","year":"2006-2007"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"47","police_station":"Tamara","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Graafwater","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Contact Related Crime","incidents":"130","police_station":"Thembalethu","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Oudtshoorn","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Contact Related Crime","incidents":"29","police_station":"Nyoni","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Viljoenskroon","province":"Free State","year":"2013-2014"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"14","police_station":"Adelaide","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"201","police_station":"Warrenton","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Rape","incidents":"48","police_station":"Harrismith","province":"Free State","year":"2016-2017"}
    ,{"crime":"Robbery at non-residential premises","incidents":"12","police_station":"Thabazimbi","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Ndevana","province":"Eastern Cape","year":"2010-2011"}
    ,{"crime":"Burglary at non-residential premises","incidents":"8","police_station":"Hilton-Kzn","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Steunmekaar","province":"Free State","year":"2008-2009"}
    ,{"crime":"Stock-theft","incidents":"28","police_station":"Devon","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Contact Crime","incidents":"355","police_station":"Madibogo","province":"North West","year":"2005-2006"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"508","police_station":"Kirkwood","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"Property Related Crime","incidents":"342","police_station":"Mmametlake","province":"Mpumalanga","year":"2012-2013"}
    ,{"crime":"Malicious damage to property","incidents":"104","police_station":"Dundee","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Sebayeng","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"84","police_station":"Maydon Wharf","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"0","police_station":"Hogsback","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Shoplifting","incidents":"221","police_station":"Midrand","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"164","police_station":"Ohrigstad","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Burglary at residential premises","incidents":"171","police_station":"Reigerpark","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Contact Related Crime","incidents":"1","police_station":"Saamboubrug","province":"Limpopo","year":"2011-2012"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Committees","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Tsomo","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"TRIO Crimes","incidents":"3","police_station":"Strand","province":"Western Cape","year":"2005-2006"}
    ,{"crime":"Burglary at non-residential premises","incidents":"72","police_station":"Marikana","province":"North West","year":"2007-2008"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Hebron","province":"North West","year":"2005-2006"}
    ,{"crime":"Sexual Assault","police_station":"Barberton","province":"Mpumalanga","year":"2005-2006"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"3449","police_station":"Beaufort West","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"10","police_station":"Swartruggens","province":"North West","year":"2010-2011"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"937","police_station":"Warrenton","province":"Northern Cape","year":"2011-2012"}
    ,{"crime":"Drug-related crime","incidents":"40","police_station":"Theunissen","province":"Free State","year":"2013-2014"}
    ,{"crime":"TRIO Crimes","incidents":"4","police_station":"Phuthaditjhaba","province":"Free State","year":"2005-2006"}
    ,{"crime":"Stock-theft","incidents":"4","police_station":"Bray","province":"North West","year":"2008-2009"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"8","police_station":"Sekgosese","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Shoplifting","incidents":"0","police_station":"Suurbraak","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Contact Related Crime","incidents":"119","police_station":"Marikana","province":"North West","year":"2008-2009"}
    ,{"crime":"Contact Related Crime","incidents":"22","police_station":"Prince Albert","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Attempted murder","incidents":"11","police_station":"Harrismith","province":"Free State","year":"2006-2007"}
    ,{"crime":"Attempted murder","incidents":"13","police_station":"Point","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"19","police_station":"Elliotdale","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Property Related Crime","incidents":"155","police_station":"Magaliesburg","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"0","police_station":"Laersdrift","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Stock-theft","incidents":"25","police_station":"Butterworth","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Shoplifting","incidents":"73","police_station":"Moorreesburg","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Fish Hoek","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Robbery at non-residential premises","incidents":"13","police_station":"Mount Frere","province":"Eastern Cape","year":"2014-2015"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"140","police_station":"Dobsonville","province":"Gauteng","year":"2008-2009"}
    ,{"crime":"Burglary at non-residential premises","incidents":"58","police_station":"Stilfontein","province":"North West","year":"2012-2013"}
    ,{"crime":"Stock-theft","incidents":"16","police_station":"Warrenton","province":"Northern Cape","year":"2007-2008"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"165","police_station":"Kenhardt","province":"Northern Cape","year":"2010-2011"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"De Rust","province":"Western Cape","year":"2010-2011"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"62","police_station":"Klapmuts","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Attempted sexual offences","incidents":"1","police_station":"Brooklyn","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Malicious damage to property","incidents":"19","police_station":"Bridge Camp","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"1393","police_station":"Ulundi","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Burglary at non-residential premises","incidents":"1","police_station":"Rietvlei","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"81","police_station":"Kanoneiland","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Kei Bridge","province":"Eastern Cape","year":"2015-2016"}
    ,{"crime":"Arson","incidents":"10","police_station":"Steenberg","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Calcutta","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Attempted sexual offences","incidents":"4","police_station":"Kuilsrivier","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"TRIO Crimes","incidents":"22","police_station":"Table View","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Contact Crime","incidents":"380","police_station":"Sebayeng","province":"Limpopo","year":"2015-2016"}
    ,{"crime":"Robbery at residential premises","incidents":"35","police_station":"Edenpark","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Roadside","province":"Free State","year":"2008-2009"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Bergville","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Shoplifting","incidents":"110","police_station":"Butterworth","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Contact sexual offences","incidents":"3","police_station":"Rabie Ridge","province":"Gauteng","year":"2015-2016"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"59","police_station":"Bonnievale","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Stock-theft","incidents":"52","police_station":"Umbumbulu","province":"Kwazulu/Natal","year":"2012-2013"}
    ,{"crime":"Malicious damage to property","incidents":"601","police_station":"Nyanga","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"19","police_station":"Sheepmoor","province":"Mpumalanga","year":"2011-2012"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"26","police_station":"Madadeni","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Drug-related crime","incidents":"115","police_station":"Or Tambo Intern Airp","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"TRIO Crimes","incidents":"5","police_station":"Greylingstad","province":"Mpumalanga","year":"2016-2017"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"3","police_station":"Dullstroom","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Rosendal","province":"Free State","year":"2008-2009"}
    ,{"crime":"Carjacking","incidents":"2","police_station":"Schoemansdal","province":"Mpumalanga","year":"2013-2014"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"387","police_station":"Middledrift","province":"Eastern Cape","year":"2013-2014"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Graaff-Reinet","province":"Eastern Cape","year":"2012-2013"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"208","police_station":"Mayville-Kzn","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"0","police_station":"Sebayeng","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Sexual Assault","incidents":"4","police_station":"Umzinto","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Contact Crime","incidents":"373","police_station":"Deneysville","province":"Free State","year":"2007-2008"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Tom Burke","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"TRIO Crimes","incidents":"0","police_station":"Mokwakwaila","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Sexual Offences","incidents":"5","police_station":"Soutpan","province":"Free State","year":"2009-2010"}
    ,{"crime":"Property Related Crime","incidents":"18","police_station":"Tom Burke","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Rape","incidents":"56","police_station":"Kanyamazane","province":"Mpumalanga","year":"2011-2012"}
    ,{"crime":"Robbery at non-residential premises","incidents":"40","police_station":"Umlazi","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Commercial crime","incidents":"10","police_station":"Laingsburg","province":"Western Cape","year":"2014-2015"}
    ,{"crime":"Rape","incidents":"16","police_station":"Hout Bay","province":"Western Cape","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"7","police_station":"Macleantown","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Truck hijacking","incidents":"1","police_station":"Nottingham Road","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Robbery at residential premises","incidents":"1","police_station":"Rooiberg","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Burglary at non-residential premises","incidents":"375","police_station":"Umbilo","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Burglary at residential premises","incidents":"62","police_station":"Cookhouse","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"TRIO Crimes","incidents":"30","police_station":"Leslie","province":"Mpumalanga","year":"2015-2016"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"13","police_station":"Sakhile","province":"Mpumalanga","year":"2009-2010"}
    ,{"crime":"Common robbery","incidents":"24","police_station":"Ekuvukeni","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Lukholweni","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Malicious damage to property","incidents":"25","police_station":"Murraysburg","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"102","police_station":"Rabie Ridge","province":"Gauteng","year":"2014-2015"}
    ,{"crime":"Shoplifting","incidents":"20","police_station":"Kagisho","province":"Northern Cape","year":"2014-2015"}
    ,{"crime":"Burglary at non-residential premises","incidents":"38","police_station":"Saselamani","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"0","police_station":"Magudu","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Ntabamhlophe","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"28","police_station":"Stutterheim","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Drug-related crime","incidents":"17","police_station":"Kleinbulhoek","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"9","police_station":"Thornhill","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"TRIO Crimes","incidents":"0","police_station":"Ekulindeni","province":"Mpumalanga","year":"2007-2008"}
    ,{"crime":"Stock-theft","incidents":"19","police_station":"Machadodorp","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Shoplifting","incidents":"41","police_station":"Sydenham","province":"Kwazulu/Natal","year":"2005-2006"}
    ,{"crime":"Burglary at residential premises","incidents":"28","police_station":"Mid Illovo","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Other Serious Crime","incidents":"327","police_station":"Masoyi","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Common assault","incidents":"0","police_station":"Bridge Camp","province":"Eastern Cape","year":"2016-2017"}
    ,{"crime":"Shoplifting","incidents":"1","police_station":"Wepener","province":"Free State","year":"2010-2011"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"11","police_station":"Bronkhorstspruit","province":"Gauteng","year":"2011-2012"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Mdantsane","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"TRIO Crimes","incidents":"6","police_station":"Namahadi","province":"Free State","year":"2005-2006"}
    ,{"crime":"Property Related Crime","incidents":"2041","police_station":"Worcester","province":"Western Cape","year":"2016-2017"}
    ,{"crime":"Property Related Crime","incidents":"542","police_station":"Kwamakhutha","province":"Kwazulu/Natal","year":"2011-2012"}
    ,{"crime":"Attempted sexual offences","incidents":"3","police_station":"Katlehong North","province":"Gauteng","year":"2013-2014"}
    ,{"crime":"Carjacking","incidents":"1","police_station":"Kathu","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"1","police_station":"Tylden","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Robbery at non-residential premises","incidents":"14","police_station":"Batlharos","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Sexual Offences","incidents":"58","police_station":"Ndevana","province":"Eastern Cape","year":"2009-2010"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"0","police_station":"Paterson","province":"Eastern Cape","year":"2006-2007"}
    ,{"crime":"17  Community Reported Serious Crimes","incidents":"224","police_station":"St Faiths","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Property Related Crime","incidents":"72","police_station":"Balfour","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"All theft not mentioned elsewhere","incidents":"149","police_station":"Springbok","province":"Northern Cape","year":"2016-2017"}
    ,{"crime":"Other Serious Crime","incidents":"178","police_station":"Darling","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"3","police_station":"Impendle","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Arson","incidents":"14","police_station":"Ikamvelihle","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Burglary at residential premises","incidents":"22","police_station":"Bedwang","province":"North West","year":"2009-2010"}
    ,{"crime":"Illegal possession of firearms and ammunition","incidents":"2","police_station":"Namahadi","province":"Free State","year":"2011-2012"}
    ,{"crime":"Other Serious Crime","incidents":"98","police_station":"Koppies","province":"Free State","year":"2016-2017"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"9","police_station":"Sterkstroom","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Memel","province":"Free State","year":"2013-2014"}
    ,{"crime":"Stock-theft","incidents":"1","police_station":"Harare","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Robbery at residential premises","incidents":"154","police_station":"Thohoyandou","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Common assault","incidents":"397","police_station":"Eshowe","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Drug-related crime","incidents":"14","police_station":"Ezibayeni","province":"Kwazulu/Natal","year":"2015-2016"}
    ,{"crime":"Common robbery","incidents":"52","police_station":"Brackendowns","province":"Gauteng","year":"2016-2017"}
    ,{"crime":"Driving under the influence of alcohol or drugs","incidents":"50","police_station":"Kwandengezi","province":"Kwazulu/Natal","year":"2010-2011"}
    ,{"crime":"Rape","incidents":"6","police_station":"Berea","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Rape","incidents":"2","police_station":"Parys","province":"Free State","year":"2012-2013"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"110","police_station":"Barkly West","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Murder","incidents":"10","police_station":"Bultfontein","province":"Free State","year":"2013-2014"}
    ,{"crime":"Drug-related crime","incidents":"97","police_station":"Nyoni","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"3","police_station":"Van Reenen","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Arson","incidents":"6","police_station":"Paarl East","province":"Western Cape","year":"2006-2007"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"0","police_station":"Nieuwoudtville","province":"Northern Cape","year":"2005-2006"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"13","police_station":"Hartswater","province":"Northern Cape","year":"2013-2014"}
    ,{"crime":"Common assault","incidents":"106","police_station":"Port Alfred","province":"Eastern Cape","year":"2007-2008"}
    ,{"crime":"Burglary at non-residential premises","incidents":"7","police_station":"Machadodorp","province":"Mpumalanga","year":"2010-2011"}
    ,{"crime":"Robbery at non-residential premises","incidents":"9","police_station":"Sannieshof","province":"North West","year":"2010-2011"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Groot-Drakenstein","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Common assault","incidents":"650","police_station":"Tembisa","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Carjacking","incidents":"239","police_station":"Chatsworth","province":"Kwazulu/Natal","year":"2008-2009"}
    ,{"crime":"Contact Crime","incidents":"476","police_station":"Schoemansdal","province":"Mpumalanga","year":"2014-2015"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Tulbagh","province":"Western Cape","year":"2012-2013"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"St Faiths","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Malicious damage to property","incidents":"12","police_station":"Malipsdrift","province":"Limpopo","year":"2010-2011"}
    ,{"crime":"Robbery with aggravating circumstances","incidents":"3","police_station":"Hankey","province":"Eastern Cape","year":"2011-2012"}
    ,{"crime":"Robbery at residential premises","incidents":"0","police_station":"Musina","province":"Limpopo","year":"2005-2006"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Bray","province":"North West","year":"2011-2012"}
    ,{"crime":"Contact Related Crime","incidents":"109","police_station":"Sekhukhune","province":"Limpopo","year":"2009-2010"}
    ,{"crime":"Robbery at non-residential premises","incidents":"0","police_station":"Riebeeck East","province":"Eastern Cape","year":"2005-2006"}
    ,{"crime":"Theft out of or from motor vehicle","incidents":"53","police_station":"Vredendal","province":"Western Cape","year":"2015-2016"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"16","police_station":"Koster","province":"North West","year":"2013-2014"}
    ,{"crime":"Rape","police_station":"Colenso","province":"Kwazulu/Natal","year":"2007-2008"}
    ,{"crime":"Burglary at residential premises","incidents":"329","police_station":"Jabulani","province":"Gauteng","year":"2012-2013"}
    ,{"crime":"Bank Robbery","incidents":"0","police_station":"Akasia","province":"Gauteng","year":"2006-2007"}
    ,{"crime":"Commercial crime","incidents":"27","police_station":"Qumbu","province":"Eastern Cape","year":"2008-2009"}
    ,{"crime":"Burglary at residential premises","incidents":"68","police_station":"Bergville","province":"Kwazulu/Natal","year":"2016-2017"}
    ,{"crime":"Robbery at non-residential premises","incidents":"14","police_station":"Matlala","province":"Limpopo","year":"2013-2014"}
    ,{"crime":"Attempted murder","incidents":"0","police_station":"Westenburg","province":"Limpopo","year":"2007-2008"}
    ,{"crime":"Sexual Assault","police_station":"Bonnievale","province":"Western Cape","year":"2007-2008"}
    ,{"crime":"Burglary at residential premises","incidents":"534","police_station":"Middelburg Mpumalang","province":"Mpumalanga","year":"2007-2008"}
    ,{"crime":"Rape","incidents":"12","police_station":"Tshaulu","province":"Limpopo","year":"2016-2017"}
    ,{"crime":"Malicious damage to property","incidents":"13","police_station":"Bishopstowe","province":"Kwazulu/Natal","year":"2014-2015"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Bray","province":"North West","year":"2008-2009"}
    ,{"crime":"Malicious damage to property","incidents":"43","police_station":"Pudimoe","province":"North West","year":"2015-2016"}
    ,{"crime":"Sexual Assault","police_station":"Ratanda","province":"Gauteng","year":"2007-2008"}
    ,{"crime":"Theft of motor vehicle and motorcycle","incidents":"1","police_station":"Groenvlei","province":"Kwazulu/Natal","year":"2009-2010"}
    ,{"crime":"Sexual Offences detected as a result of Police Action","incidents":"2","police_station":"Marquard","province":"Free State","year":"2011-2012"}
    ,{"crime":"Other Serious Crime","incidents":"524","police_station":"Ficksburg","province":"Free State","year":"2008-2009"}
    ,{"crime":"Crimes detected as a result of police action","incidents":"350","police_station":"Ocean View","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Robbery at non-residential premises","incidents":"5","police_station":"Modimolle","province":"Limpopo","year":"2008-2009"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Boshof","province":"Free State","year":"2011-2012"}
    ,{"crime":"Shoplifting","incidents":"71","police_station":"Khayelitsha","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Commercial crime","incidents":"77","police_station":"Sun City","province":"North West","year":"2009-2010"}
    ,{"crime":"Drug-related crime","incidents":"874","police_station":"Sydenham","province":"Kwazulu/Natal","year":"2013-2014"}
    ,{"crime":"Contact sexual offences","incidents":"0","police_station":"Vosburg","province":"Northern Cape","year":"2012-2013"}
    ,{"crime":"Assault with the intent to inflict grievous bodily harm","incidents":"20","police_station":"Graafwater","province":"Western Cape","year":"2008-2009"}
    ,{"crime":"Common robbery","incidents":"0","police_station":"Tierpoort","province":"Free State","year":"2007-2008"}
    ,{"crime":"Carjacking","incidents":"0","police_station":"Leboeng","province":"Limpopo","year":"2012-2013"}
    ,{"crime":"Truck hijacking","incidents":"0","police_station":"Mitchells Plain","province":"Western Cape","year":"2009-2010"}
    ,{"crime":"Robbery of cash in transit","incidents":"0","police_station":"Allanridge","province":"Free State","year":"2013-2014"}];

    var myJson = JSON.stringify(jsonData);
    var array = JSON.parse(myJson);
    return (array);    
}

function addState(array){
    console.log(array);
    for (obj of array){
        if (obj.province === "Kwazulu/Natal")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-NL");
            obj = arr;
        }
        else if (obj.province === "Limpopo")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-LP");
            obj = arr;
        }
        else if (obj.province === "Mpumalanga")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-MP");
            obj = arr;
        }
        else if (obj.province === "Free State")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-FS");
            obj = arr;
        }
        else if (obj.province === "North West")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-NW");
            obj = arr;
        }
        else if (obj.province === "Northern Cape")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-NC");
            obj = arr;
        }
        else if (obj.province === "Eastern Cape")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-EC");
            obj = arr;
        }
        else if (obj.province === "Gauteng")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-GP");
            obj = arr;
        }
        else if (obj.province === "Western Cape")
        {
            var arr = $.map(obj, function(el) { return el; });
            arr.push("ZA-WC");
            obj = arr;
        }
    }
    return (array);
}

function drawRegionsMap() {

    var array = addState(getData);

    var data = google.visualization.arrayToDataTable([
        ['State', 'Province', 'Incidents'],
        ['ZA-GP', 'Gauteng', 10],
        ['ZA-WC', 'Western Cape', 5],
        ['ZA-EC', 'Eastern Cape', 2],
        ['ZA-NL', 'KwaZulu Natal', 1],
        ['ZA-FS', 'Free State', 1],
        ['ZA-LP', 'Limpopo', 6],
        ['ZA-NW', 'North-West', 10],
        ['ZA-MP', 'Mpumalanga', 34],
        ['ZA-NC', 'Northern Cape', 21], 
    ]);

    console.dir(array);

    var options = {
        datalessRegionColor: '#123456',
        region: "ZA",
        resolution: "provinces",
        colorAxis: {
            colors: ['#DB964D', '#f36b22']
        },
        defaultColor: '#d3d3d3',
        keepAspectRatio: true,
        backgroundColor: {
            fill: 'transparent',
        }};

    var chart = new google.visualization.GeoChart(document.getElementById('southAfrica'));
    chart.draw(data, options);
}