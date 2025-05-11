import './App.css'
import logo from '@/assets/logo.png'
import { Buttonget } from '@/components/button/button'
import pilasos from '@/assets/pilasos.png'
import { Text } from '@/components/textcomp/text'
import { Article1 } from '@/components/article1/article1'

import c1 from '@/assets/c1.png'
import c2 from '@/assets/c2.png'
import c3 from '@/assets/c3.png'
import { ButtonWhite } from './components/button/button'
import { Text2 } from '@/components/text2/text2'

import f1 from '@/assets/f1.png'
import f2 from '@/assets/f2.png'
import { Text3 } from './components/text3/text3'

import m1 from '@/assets/m1.png'
import m2 from '@/assets/m2.png'
import m3 from '@/assets/m3.png'
import bunak from '@/assets/bunak.png'
import fone from '@/assets/fone.png'
import khonacha from '@/assets/khonacha.png'
import checkbox from '@/assets/checkbox.png'
import ppppp1 from '@/assets/ppppp1.png'
import v1 from '@/assets/v1.png'
import v2 from '@/assets/v2.png'
export default function App(){
  return <>
  <nav>
    <div className='nav1'>
<img src={logo} alt="" />
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Pages</li>
  <li>Contact</li>
</ul>
    </div>
    <div className='nav2'>
<span>Cart (0)</span>
<Buttonget/>
    </div>
  </nav>
  <section className='section_2'>
<aside className='aside_1'>
<h1>Quality cleaning for your home</h1>
<p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
<Buttonget/>
</aside>
<img src={pilasos} alt="" />

  </section>
  <Text/>
<section className='section_3'>
<Article1>
  <img src={c1} alt="" />
  <h1>1. Schedule online</h1>
  <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
</Article1>


<Article1>
  <img src={c2} alt="" />
  <h1>2. Pay online easily</h1>
  <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
</Article1>


<Article1>
  <img src={c3} alt="" />
  <h1>3. Get your house cleaned</h1>
  <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
</Article1>
</section>
<div className='getWhite'>
  <Buttonget></Buttonget>
  <ButtonWhite/>
</div>
<section>
<Text2/>
<img className='f1' src={f1} alt="" />
<img className='f2' src={f2} alt="" />
</section>
<Text3>
  <h1>Take a look at our professional services</h1>
   <ButtonWhite/>
</Text3>

<section className='section_4'>

  <Article1>
    <img src={m1} alt="" />
    <h1>House cleaning</h1>
    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
  </Article1>


    <Article1>
    <img src={m2} alt="" />
    <h1>Office cleaning</h1>
    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
  </Article1>
   <Article1>

    <img src={m3} alt="" />
    <h1>Industrial cleaning</h1>
    <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
  </Article1>

</section>
<section className='section_5'>
<img className='bunak' src={bunak} alt="" />
<aside className='asidebunak'> 
  <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
  
  <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
  <div className='butfone'>
  <Buttonget>   </Buttonget>
<img className='fone' src={fone} alt="" />
  </div>



</aside>
</section>
<section className='section_6'>
<img className='khonacha' src={khonacha} alt="" />
<aside className='chekkk'>
  <h1>We cover all areas of your home or office</h1>
  
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
  <img className='checkbox' src={checkbox} alt="" />

</aside>


</section>

<section className='section_6'>
  <aside className='chekkk'>
  <h1>What makes us different?</h1>
  
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
 

</aside>
<img className='khonacha' src={ppppp1} alt="" />
</section>

<section className='section_7'>
  <aside>
    <h1>Articles & resources</h1>
    <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
  </aside>
<div>
   <Buttonget/><ButtonWhite/>
</div>
</section>

<section className='section_8'>
<img className='v' src={v1} alt="" />
<img className='v' src={v2} alt="" />

</section>

<section class="quote-section">
  <div class="quote-left">
    <h2>Request a free cleaning quote today</h2>
    <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
    <div class="quote-call">
      <div class="call-icon">📞</div>
      <div>
        <small>CALL US NOW</small>
        <p class="phone">(414) 567 - 2109</p>
      </div>
    </div>
    <hr />
    <div class="quote-extra">
      <h4>Not convinced yet?</h4>
      <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
      <button class="secondary-btn">Browse our packages</button>
    </div>
  </div>

  <div class="quote-right">
    <form class="quote-form">
      <div class="form-row">
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Phone number" />
      </div>
      <div class="form-row">
        <input type="text" placeholder="Address" />
        <input type="email" placeholder="Email" />
      </div>
      <div class="form-row">
        <input type="text" placeholder="Requested service" />
        <input type="text" placeholder="Day of service" />
      </div>
      <textarea placeholder="Add a note"></textarea>
      <button type="submit" class="submit-btn">Submit message</button>
    </form>
  </div>
</section>
<footer class="footer">
  <div class="footer-content">
    <div class="footer-box">
      <h3>Quality cleaning for your home</h3>
      <p>Lorem ipsum dolor sit amet cteturo adipiscing elit, sed do eiusmod.</p>
      <div class="footer-icons">
        <span class="icon"></span>
        <span class="icon"></span>
        <span class="icon"></span>
        <span class="icon"></span>
      </div>
    </div>
    
    <div class="footer-box">
      <h4>Contact us</h4>
      <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
      <p>(414) 567 - 2109</p>
      <p>contact@cleaning.com</p>
    </div>

    <div class="footer-box">
      <h4>Hours</h4>
      <p><strong>Monday to Friday</strong><br/>6:00 AM - 9:00 PM</p>
      <p><strong>Saturday & Sunday</strong><br/>8:00 AM - 8:00 PM</p>
    </div>

    <div class="footer-box">
      <h4>Get a free estimate</h4>
      <p><strong class="phone-blue">(414) 567 - 2109</strong></p>
      <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
      <button class="quote-btn">Request a free quote</button>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-brand">
      <span class="logo">✨ Cleaning X</span>
    </div>
    <p>Copyright © Cleaning X | Designed by BRIX Templates – Powered by Webflow – <a href="#">Licenses</a></p>
  </div>

.
</footer>

  </>
}