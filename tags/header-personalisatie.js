<script>
//haal de aantallen op uit de localstorage
var land1 = localStorage.getItem('land_1');
var land2 = localStorage.getItem('land_2');
  
if (land1 > 3)
{
  jQuery('body > div.wrapper > div.gallery > ul > li').attr('style','background: url("//images.example.nl.jpg") 50% 100% / cover no-repeat; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;');
  jQuery('body > div.wrapper > div.gallery > a').remove();
  jQuery('.slogan').text('Tekst in header');
  jQuery('.slogan').attr('style','font:55px/42px \'marydalebold\', Helvetica, Arial, sans-serif; text-align:right;padding:240px 0.8% 0 0;width:750px;');
  jQuery('.slogan').append('<br/><a href="/sectie/subsectie" class="btn-01" style="margin-left:10px; float:right; margin-top:30px; text-shadow:none;" id="personalisatie_trigger_home"><span>Teksten</span></a>');
  
  //DataLayer push voor GTM/GA metingen
  dataLayer.push({event:'personalisatie', eventCategory:'personalisatie', eventAction:'header - view', eventLabel:'land1'});
  
  jQuery("#personalisatie_trigger_header").click(function(){
  dataLayer.push({event:'personalisatie', eventCategory:'personalisatie', eventAction:'header - click', eventLabel:'land1'});
  });
}
else if (land2 > 3)
{
//repeat script for other header..
  });
} 
</script>
