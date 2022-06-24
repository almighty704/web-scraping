from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
from selenium import webdriver

app = Flask(__name__)

@app.route("/amazon-scrape", methods=['POST'])
def amazon():
    request_data = request.get_json()
    results = amazon_scrape(request_data['search'])
    return results

@app.route("/ebay-scrape", methods=['POST'])
def ebay():
    request_data = request.get_json()
    results = ebay_scrape(request_data['search'])
    return results

@app.route("/aliexpress-scrape", methods=['POST'])
def ali_expres():
    request_data = request.get_json()
    results = ali_expres_scrape(request_data['search'])
    return results


def amazon_scrape(search_term):
    
    template = 'https://amazon.com/s?k={}&sprefix=monitor%2Caps%2C178&ref=nb_sb_ss_ts-doa-p_2_7'
    search_term = search_term.replace(' ', '+')
    url = template.format(search_term)
    amazonRecords = []
    driver = webdriver.Chrome('/Users/ersixhangoli/Downloads/chromedriver')
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    results = soup.find_all('div', {'data-component-type': 's-search-result'})

    for item in results:
        record = extract_amazon_record(item)
        if record: 
             amazonRecords.append(record)
    driver.close()
    return jsonify(amazonRecords) 

def ebay_scrape(search_term):
    template = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw={}&_sacat=0&LH_TitleDesc=0&_odkw=monitor&_osacat=0'
    search_term = search_term.replace(' ', '+')
    url = template.format(search_term)
    ebayRecords = []
    driver = webdriver.Chrome('/Users/ersixhangoli/Downloads/chromedriver')
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    results = soup.find_all('div', {'class': 's-item__info clearfix'})
    image = soup.find_all('img', {'class': 's-item__image-img'})


    for item in range(len(results)):
        record = extract_ebay_record(results[item], image[item])
        if record: 
            ebayRecords.append(record)
    driver.close()
    return jsonify(ebayRecords)

def ali_expres_scrape(search_term):

    template ='https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20220614113010&SearchText={}&spm=a2g0o.home.1000002.0'
    search_term = search_term.replace(' ', '+')
    url = template.format(search_term)
    aliExpresRecords = []
    driver = webdriver.Chrome('/Users/ersixhangoli/Downloads/chromedriver')
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    results = soup.find_all('a', {'class': '_3t7zg _2f4Ho'})
       
    for item in results:
        record = extract_ali_expres_record(item)
        if record: 
            aliExpresRecords.append(record)
    driver.close()

    return jsonify(aliExpresRecords)



def extract_amazon_record(item):
    
    #description and url
    try:
        #atag
        atag = item.h2.a
    except AttributeError:
        atag = 'N/A'
    
    try:
        description = atag.text.strip()
    except AttributeError:
        description = 'N/A'

    try:
        url = 'https://amazon.com' + atag.get('href')
    except AttributeError:
        url = 'N/A'

    try:
        #price
        price_parent = item.find('span', 'a-price')
        price = price_parent.find('span', 'a-offscreen').text
    except AttributeError:
        price = 'N/A'

    try:
        #raiting
        rating = item.i.text
    except AttributeError:
        rating = 'N/A'

    try:
        #image
        image = item.img.get('src')
    except AttributeError:
        image = 'N/A'

    return {'description': description, 'image': image, 'price': price, 'rating': rating, 'url': url, 'type': 'amazon'}

def extract_ebay_record(item, image):

    #description and url
    try:
        #atag
        atag = item.a
    except AttributeError:
        atag = 'N/A'
    
    try:
        description = atag.h3.text.strip()
    except AttributeError:
        description = 'N/A'

    try:
        url = 'https://www.ebay.com/' + atag.get('href')
    except AttributeError:

        url = 'N/A'

    try:
        #price
        price_grand_parent = item.find('div', {'class': 's-item__details clearfix'})
        price_parent = price_grand_parent.find('div', {'class':'s-item__detail s-item__detail--primary'})
        price = price_parent.find('span', {'class':'s-item__price'}).text
    except AttributeError:
        price = 'N/A'

    try:
        #raiting
        rating = item.i.text
    except AttributeError:
        rating = 'N/A'

    try:
        #image
        image = image.get('src')
    except AttributeError:
        image = 'N/A'

    return {'description': description, 'image': image, 'price': price, 'rating': rating, 'url': url, 'type': 'ebay'}

def extract_ali_expres_record(item):

    #description and url
    try:
        description = item.find('h1', '_18_85').text
        # print(description)
    except AttributeError:
        description = 'N/A'

    try:
        price = item.find('div', 'mGXnE _37W_B').text
    except AttributeError:
        price = 'N/A'
    
    try:
        rating = item.find('span', 'eXPaM').text
    except AttributeError:
        rating = 'N/a'

    try:
        url = item.get('href').replace('//','')
    except AttributeError:
        url = 'N/A'
    
    try:
        image = item.find('img', '_1RtJV product-img').get('src').replace('//','')
    except AttributeError:
        image = 'N/A'
    
    return {'description': description, 'image': image, 'price': price, 'rating': rating, 'url': url, 'type': 'aliexpres'}


