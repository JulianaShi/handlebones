(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n        <!--&lt;!&ndash;";
  stack1 = helpers['if'].call(depth0, data.index, depth0.equal, 0, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "&ndash;&gt;-->\n        <!--";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "&ndash;&gt;-->\n        <!--<div class=\"boxes\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>-->\n        <!--&lt;!&ndash;";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "&ndash;&gt;-->\n        <!--&lt;!&ndash;<div class=\"boxes\" style=\"display: none;\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>&ndash;&gt;-->\n        <!--&lt;!&ndash;";
  return buffer;
  }

  buffer += "<!--<script>-->\n    <!--var myArray = [];-->\n    <!--for (var i = 0; i < "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; i++) {-->\n        <!--myArray.push("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),stack1 == null || stack1 === false ? stack1 : stack1.lgImageSrc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");-->\n        <!--console.log(myArray);-->\n    <!--}-->\n<!--</script>-->\n<!--<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img-->\n        <!--src=\"img/product/close-panel.png\"></span></div>-->\n<!--<div id=\"ratings-container\">-->\n    <!--<span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a-->\n        <!--href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>-->\n<!--</div>-->\n<!--<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>-->\n<!--<div id=\"product-image\">-->\n    <!--<div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>-->\n    <!--&lt;!&ndash;<img src=\"img/product/TV.png\"/>&ndash;&gt;-->\n    <!--<div id=\"hero-image\">-->\n        <!--";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "-->\n    <!--</div>-->\n    <!--<div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>-->\n<!--</div>-->\n<!--<div id=\"pager\"></div>-->\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        <div class=\"boxes\" style=\"display: none;\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<script>\n    var myArray = [];\n    for (var i = 0; i < "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; i++) {\n        myArray.push("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData)),stack1 == null || stack1 === false ? stack1 : stack1.lgImageSrc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\n        console.log(myArray);\n    }\n</script>\n<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.genericContent),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.sellers),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"jquery\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"jquery\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><a id=\"prev\" href=\"#\"><img src=\"img/product/arrow-left-gray.png\"/></a></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><a id=\"next\" href=\"#\"><img src=\"img/product/arrow-right.png\"></a></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.rating)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><div id=\"prev\"><img src=\"img/product/arrow-left-gray.png\"/></div></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><div id=\"next\"><img src=\"img/product/arrow-right.png\" /></div></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"stars left-float\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.customerRatingUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><div id=\"prev\"><img src=\"img/product/arrow-left-gray.png\"/></div></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><div id=\"next\"><img src=\"img/product/arrow-right.png\" /></div></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['clearFilters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"filter-matches\" class=\"left-float\">\n    <div id=\"match-num\" class=\"left-float\"></div>\n    &nbsp;Matches <span style=\"color:#918888; font-weight:500;\">for televisions that fit that criteria.</span></div>\n<div id=\"filter-clear\">\n<button type=\"button\" name=\"\" value=\"\" class=\"css3button\" id=\"clear-filter\">Clear Filters</button>\n</div>";
  });
templates['filters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<img class= left-float src=\"../img/tVFinder.png\" id=\"tv-finder-img\"/>\n<span id=\"slider-div\" class=\"left-float\">\n                <div style=\"font-family: Arial,Helvetica,Sans-serif;font-size: 15px;\">Size:</div>\n                <div id=\"amount\" style=\"border: 0; color: #424242; font-weight: bold;\"></div>\n                <div id=\"slider\">\n                    <div id=\"slider-range\"></div>\n                </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Type</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-types\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LCD\">LCD</option>\n                            <option value=\"3D\">3D</option>\n                            <option value=\"LED\">LED</option>\n                            <option value=\"Plasma\">Plasma</option>\n                            <option value=\"Projection\">Projection</option>\n                            <option value=\"Smart\">Smart</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Brand</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select id=\"tv-brand\">\n                            <option selected=\"selected\" value=\"select\" disabled>Select</option>\n                            <option value=\"LG\">LG</option>\n                            <option value=\"Panasonic\">Panasonic</option>\n                            <option value=\"Samsung\">Samsung</option>\n                            <option value=\"Sony\">Sony</option>\n                            <option value=\"Vizio\">Vizio</option>\n                            <option value=\"Sceptre\">Sceptre</option>\n                            <option value=\"Proscan\">Proscan</option>\n                            <option value=\"Emerson\">Emerson</option>\n                            <option value=\"Philips\">Philips</option>\n                            <option value=\"RCA\">RCA</option>\n                        </select>\n                    </div>\n            </span>\n<span class=\"tv-dropdowns left-float\">\n                    <div class=\"dropdown-labels\">Sort</div>\n                    <div class=\"left-float\" style=\"padding-right: 20px;\">\n                        <select name=\"tv-sort\" id=\"tv-sort\">\n                            <option value=\"LowestPrice\">Lowest Price</option>\n                            <option value=\"HighestPrice\">Highest Price</option>\n                            <option value=\"TopRated\">Top Rated</option>\n                            <option value=\"ScreenSize\">Screen Size</option>\n                        </select>\n                    </div>\n            </span>\n";
  });
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"top\">\n    <img id=\"wmlogo-footer\" src=\"../img/blueWmLogoFooter.png\"/>\n    <input id=\"email-signup\" type=\"text\" placeholder=\"Sign up for our Mailing List\"/>\n\n\n</div>\n<div class=\"list\">\n<a href=\"http://walmartstores.com/\">Corporate</a>\n<a href=\"http://walmartstores.com/aboutus\">Our Story</a>\n<a href=\"http://walmartstores.com/pressroom\">News &amp; Views</a>\n<a href=\"http://walmartstores.com/communitygiving\">Giving Back</a>\n<a href=\"http://walmartstores.com/sustainability\">Global Responsibility</a>\n<a href=\"http://walmartstores.com/investors\">Investors</a>\n<a href=\"http://walmartstores.com/suppliers\">Suppliers</a>\n<a href=\"http://walmartstores.com/careers\">Careers</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=542412\">About Walmart.com</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538449\">Terms of Use</a>\n<a href=\"http://affiliates.walmart.com/aff_home.jsp\">Affiliate Program</a>\n<a href=\"http://public.conxport.com/walmart/sponsorship/home.aspx\">Sponsorship Submission</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538456\">International Customers</a>\n<a href=\"http://www.walmart.com/cservice/contextual_help_popup.gsp?modId=971879\">About Our Ads</a>\n<a href=\"http://www.walmart.com/cservice/ca_storefinder.gsp\">Store Finder</a>\n<a href=\"http://coupons.walmart.com/?povid=cat14503-env172199-module092411-lLinkISNCOUPON\">Printable Coupons</a>\n<a href=\"http://www.walmart.com/wf.gsp/a_d_registration_flow/landing\">Associate Discount</a>\n<a href=\"http://walmartstores.com/PrivacySecurity/?sourceid=walmart.com-footer\">Privacy &amp; Security</a>\n<a href=\"http://walmartstores.com/9243.aspx#California\">California Privacy Rights</a>\n<a href=\"http://www.walmartlabs.com/\">@Walmart Labs</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=121828\">See All Departments</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=5436\">Help Center</a>\n<a href=\"http://www.walmart.com/cservice/li_trackorder.gsp?NavMode=2\">Track Your Order</a>\n<a href=\"http://www.walmart.com/catalog/catalog.gsp?cat=538459\">Returns Policy</a>\n<a href=\"http://www.walmart.com/returns/returns_type.gsp\">Return an Item</a>\n<a href=\"http://walmartstores.com/Recalls/\">Product Recalls</a>\n<a href=\"http://www.walmart.com/cservice/cu_comments_online.gsp?cu_heading=8\">Contact Us</a>\n<a href=\"https://secure.opinionlab.com/ccc01/comment_card_d.asp\">Feedback</a>\n</div>\n\n<div class=\"list\">\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Black Friday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Cyber Monday</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Thanksgiving</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Laptops</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">iPads and Tablets</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">Appliances</a>\n<a href=\"http://www.walmart.com/cp/Electronics/3944\">TVs</a>\n<a href=\"http://www.walmart.com/cp/toys/4171\">Toys</a>\n<a href=\"http://www.walmart.com/cp/Gift-Cards/96894\">eGift Cards</a>\n<a href=\"http://www.walmart.com/cp/Best-Sellers/1095979\">Best Sellers</a>\n<a href=\"http://www.walmart.com/cp/New-Arrivals/1095884\">New Arrivals</a>\n<a href=\"http://www.walmart.com/cp/Top-Rated/1095980\">Top-Rated Items</a>\n</div>\n";
  });
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"left-float\"><img src=\"../img/WmLogo.png\" id=\"logo\"/></span>\n<span id=\"white\" class=\"left-float\">\n        <form method=\"get\" action=\"/search\" id=\"search\">\n            <input name=\"q\" type=\"text\" size=\"40\" placeholder=\"Search...\"/>\n        </form>\n    </span>\n<ul>\n<li><span id=\"create-link\" class=\"left-float\"><img src=\"../img/create.png\"/><a href=\"#\"> Create</a></span></li>\n<li><span id=\"sign-in\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/signIn.png\" id=\"sign-img\"/><a href=\"#\"> Sign In</a></span></li>\n<li><span id=\"cart-items\" class=\"left-float\"><img src=\"../img/pipeSeperator.png\" class=\"pipe\"/><img\n        src=\"../img/shoppingCart.png\"/><a href=\"#\"> Items</a></span></li>\n</ul>";
  });
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['itemCarousel'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"boxes\" style=\"";
  if (stack1 = helpers.imageStyle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imageStyle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.lgImageSrc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lgImageSrc; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </img></div>\n        ";
  return buffer;
  }

  buffer += "<div id=\"product-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.genericContent)),stack1 == null || stack1 === false ? stack1 : stack1.itemName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span id=\"close-x\"><img\n        src=\"img/product/close-panel.png\"></span></div>\n<div id=\"ratings-container\">\n    <span class=\"left-float\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.customerRatingUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /> </span><span id=\"review-links\" class=\"left-float\">&nbsp;&nbsp;109 Reviews  |  <a\n        href=\"#\">Write a Review</a>  | <a href=\"#\">Ask a Question</a></span>\n</div>\n<div id=\"product-price\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.sellers)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.currentItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<div id=\"product-image\">\n    <div id=\"left-arrow\"><div id=\"prev\"><img src=\"img/product/arrow-left-gray.png\"/></div></div>\n    <!--<img src=\"img/product/TV.png\"/>-->\n    <div id=\"hero-image\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.item),stack1 == null || stack1 === false ? stack1 : stack1.alternateImageData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div id=\"right-arrow\"><div id=\"next\"><img src=\"img/product/arrow-right.png\" /></div></div>\n</div>\n<div id=\"pager\"></div>\n\n\n\n\n";
  return buffer;
  });
templates['tvresults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"result-cell left-float\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"result-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </a>\n\n    <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <span class=\"price\">$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"cents\"></span></span>\n    <span class=\"stars\">";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rating; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
})();
