import React from 'react';
import './App.css';
import './index'

function App() {
  const planbyPrice  = [
    {
        planTitle: "FREE",
      amount: "$0/month",
      pdetails1: "Single User",
      pdetails2: "50GB Storage",
      pdetails3: "Unlimited Public Projects",
      pdetails4: "Community Access",
      pdetails5: "✖ Unlimited Private Projects",
      pdetails6: "✖ Dedicated Phone Support",
      pdetails7: "✖ Free Subdomain",
      pdetails8: "✖ Monthly Status Reports"
    },
    {
        planTitle: "PLUS",
        amount: "$9/month",
        pdetails1: "5 Users",
        pdetails2: "50GB Storage",
        pdetails3: "Unlimited Public Projects",
        pdetails4: "Community Access",
        pdetails5: "Unlimited Private Projects",
        pdetails6: "Dedicated Phone Support",
        pdetails7: "Free Subdomain",
        pdetails8: "✖ Monthly Status Reports"
    },
    {
        planTitle: "PRO",
        amount: "$49/month",
        pdetails1: "Unlimited Users",
        pdetails2: "50GB Storage",
        pdetails3: "Unlimited Public Projects",
        pdetails4: "Community Access",
        pdetails5: "Unlimited Private Projects",
        pdetails6: "Dedicated Phone Support",
        pdetails7: "Free Subdomain",
        pdetails8: "Monthly Status Reports"
    }
  ];

  const anyCrossMark = planbyPrice.some((plan) => {
    return plan.pdetails5.startsWith('✖') || plan.pdetails6.startsWith('✖') || plan.pdetails7.startsWith('✖') || plan.pdetails8.startsWith('✖');
  });


  return (
    <section className='container'>
      <div className='mainsectionofcard'>
        {planbyPrice.map((item, index) => (
          <Card key={index} planIndex={index} {...item} anyCrossMark={anyCrossMark} />
        ))}
      </div>
    </section>
  );
}
function Card({planTitle, amount, planIndex, anyCrossMark ,pdetails1, pdetails2, pdetails3, pdetails4, pdetails5, pdetails6, pdetails7, pdetails8}) {

    return (
    <section className='class-container'>
      <div className='cardheader'>
        <h6 className='planTitle'>{planTitle}</h6>
        <h1 className='amount'>{amount}</h1>
        <hr />
      </div>
      <div className='iconclass'>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {pdetails1}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {pdetails2}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {pdetails3}</span></p>
        <p><i className="fa fa-check mr-2 text-primary iconsingle" /><span> {pdetails4}</span></p>
        <p>
          <i className={`fa ${pdetails5.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={pdetails5.startsWith('✖') ? 'text-gray' : ''}> {pdetails5.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${pdetails6.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={pdetails6.startsWith('✖') ? 'text-gray' : ''}> {pdetails6.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${pdetails7.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary'} mr-2 iconsingle`} />
          <span className={pdetails7.startsWith('✖') ? 'text-gray' : ''}> {pdetails7.replace('✖', '')}</span>
        </p>
        <p>
          <i className={`fa ${planIndex === 0 ? 'fa-times text-gray' : (planIndex === 1 && pdetails8.startsWith('✖') ? 'fa-times text-gray' : 'fa-check text-primary')} mr-2 iconsingle`} />
          <span className={planIndex === 0 || (planIndex === 1 && pdetails8.startsWith('✖')) ? 'text-gray' : ''}> {pdetails8.replace('✖', '')}</span>
        </p>
        <div className='button mainbuttonn'>
          <button className={planIndex === 2 && anyCrossMark ? 'mainbutton-green' : 'mainbutton'}>BUTTON</button>        </div>
      </div>
    </section>
  );
}

export default App;