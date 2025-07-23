const links = document.querySelectorAll('.price-ButtonContainer');
const coins = document.querySelectorAll('.SpanNumDisplay');



links.forEach((link) => {
                                                                                link.addEventListener('click', (e) => {


                                                                                                                                                                links.forEach((link) => {

                                                                                                                                                                                                                                                link.classList.remove('active');



                                                                                                                                                                });





                                                                                                                                                                link.classList.add('active');

                                                                                                                                                                //   e.preventDefault();
                                                                                                                                                                //document.querySelector('.BoldTotalMount').innerHTML=document.querySelector('.active').value;
                                                                                                                                                                //document.querySelector('.BoldTotalMount').innerHTML=link.value;
                                                                                                                                                                if (link.value == 'Large amount supported') {

                                                                                                                                                                                                                                                document.querySelector('.BoldTotalMount').innerHTML = "<input type='text'    id='BoldTotalMount'  placeholder='insertyourAmount'  value=' '>";


                                                                                                                                                                } else {

                                                                                                                                                                                                                                                document.querySelector('.BoldTotalMount').innerHTML = link.value;

                                                                                                                                                                                                                                                document.querySelector('.BoldTotalcoins').innerHTML = document.querySelector('.price-ButtonContainer.active .SpanNumDisplay ').innerHTML;
                                                                                                                                                                }
                                                                                });
});




function Ajs() {

                                                                                var username = document.querySelector('.username');
                                                                                var BoldTotalMount = document.querySelector('.BoldTotalMount');
                                                                                var BoldTotalcoins = document.querySelector('.BoldTotalcoins');

                                                                                if (username.value != '' && BoldTotalMount.innerHTML != '') {
                                                                                                                                                                document.querySelector('.invoicebox').style.display = 'block';

                                                                                                                                                                document.querySelector('.pricepackages').style.display = 'none';

                                                                                                                                                                document.querySelector('body').style.backgroundColor = 'gray';

                                                                                                                                                                document.querySelector('.priceinv').innerHTML = BoldTotalMount.innerHTML;

                                                                                                                                                                document.querySelector('.totalpriceinv').innerHTML = document.querySelector('.priceinv').innerHTML;

                                                                                                                                                                document.querySelector('#coinsinv').innerHTML = BoldTotalcoins.innerHTML;

                                                                                                                                                                document.querySelector('#username').innerHTML = username.value;


                                                                                }
                                                                                if (username.value == '') {
                                                                                                                                                                //    username.setCustomValidity('please insert username');
                                                                                                                                                                username.style.background = 'red';
                                                                                                                                                                username.placeholder = 'username is required';
                                                                                }




                                                                                if (BoldTotalMount.innerHTML == '') {

                                                                                                                                                                alert('TotalMount is required');
                                                                                }




}



function paynow() {

                                                                                document.querySelector('.invoicebox').style.display = 'none';

                                                                                document.querySelector('#paymentcard').style.display = 'block';

                                                                                document.querySelector('.coinpay').innerHTML = document.querySelector('#coinsinv').innerHTML


}