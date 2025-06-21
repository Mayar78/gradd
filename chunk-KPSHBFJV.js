import{Cb as v,Db as y,Gc as x,Hc as S,Ic as P,Nb as h,Pb as C,Pc as E,Ra as p,Rb as M,Sb as w,Tb as A,Vb as T,Vc as O,Xa as d,Xc as k,ad as I,ga as g,id as _,mb as u,ob as c,vb as o,wb as t,xb as f}from"./chunk-XQ2V4OED.js";function R(n,b){if(n&1&&(o(0,"div",12)(1,"span"),h(2),t()()),n&2){let l=y();d(2),C("Welcome, ",l.username,"")}}function N(n,b){if(n&1&&f(0,"div",13),n&2){let l=b.$implicit;c("ngClass",l.sender)("innerHTML",l.text,p)}}var G=(()=>{class n{constructor(){this.userMessage="",this.messages=[],this.username=null}ngOnInit(){this.username=sessionStorage.getItem("displayName")||"User",this.messages.push({sender:"bot",text:this.getGreeting(),isHtml:!0})}getGreeting(){let l=new Date().getHours(),e="";return l<12?e="Good morning":l<18?e="Good afternoon":e="Good evening",`
      <div class="welcome-message">
        <h3>${e}, ${this.username}!</h3>
        <p>I'm your medical assistant. Please describe your symptoms or condition, and I'll provide information about possible treatments and precautions.</p>
        <p class="examples">Examples: <span>headache and fever</span>, <span>diabetes medications</span>, <span>\u0639\u0644\u0627\u062C \u0627\u0631\u062A\u0641\u0627\u0639 \u0636\u063A\u0637 \u0627\u0644\u062F\u0645</span></p>
      </div>
    `}sendMessage(){if(!this.userMessage.trim())return;this.messages.push({sender:"user",text:this.userMessage});let l=this.generateBotReply(this.userMessage);this.messages.push({sender:"bot",text:l,isHtml:!0}),this.userMessage=""}generateBotReply(l){console.log("Original message:",l);let e=l.toLowerCase(),i=/[\u0600-\u06FF]/.test(l),s=this.detectConditions(l);return console.log("Detected conditions:",s),s.length===0?i?"\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0623\u0639\u0631\u0627\u0636 \u0635\u062D\u064A\u062D\u0629 \u0645\u062B\u0644: \u0635\u062F\u0627\u0639\u060C \u062D\u0645\u0649\u060C \u0633\u0643\u0631\u064A\u060C \u0636\u063A\u0637\u060C \u0623\u0646\u064A\u0645\u064A\u0627\u060C \u0627\u0645\u0633\u0627\u0643\u060C \u0627\u0633\u0647\u0627\u0644\u060C \u0627\u0646\u0641\u0644\u0648\u0646\u0632\u0627\u060C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u062D\u0644\u0642\u060C \u0631\u0628\u0648\u060C \u0643\u0648\u0631\u0648\u0646\u0627.":"Please enter valid symptoms like: headache, fever, diabetes, hypertension, anemia, constipation, diarrhea, flu, sore throat, asthma, covid.":s.length>1?this.generateMultiConditionResponse(s,i):this.generateSingleConditionResponse(s[0],i)}detectConditions(l){let e=l.toLowerCase(),i=[],s=["headache","\u0635\u062F\u0627\u0639","fever","\u062D\u0645\u0649","diabetes","\u0633\u0643\u0631\u064A","\u0633\u0643\u0631","cough","\u0633\u0639\u0627\u0644","asthma","\u0631\u0628\u0648","diarrhea","\u0625\u0633\u0647\u0627\u0644","eczema","\u0625\u0643\u0632\u064A\u0645\u0627","conjunctivitis","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629","uti","urinary tract infection","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629","pms","\u0645\u062A\u0644\u0627\u0632\u0645\u0629 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062D\u064A\u0636","arthritis","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u0635\u0644","hypertension","high blood pressure","\u0627\u0631\u062A\u0641\u0627\u0639 \u0636\u063A\u0637 \u0627\u0644\u062F\u0645","depression","\u0627\u0643\u062A\u0626\u0627\u0628","hypothyroidism","\u0642\u0635\u0648\u0631 \u0627\u0644\u063A\u062F\u0629 \u0627\u0644\u062F\u0631\u0642\u064A\u0629","gerd","acid reflux","heartburn","\u0627\u0631\u062A\u062C\u0627\u0639","\u062D\u0631\u0642\u0629","allergic rhinitis","hay fever","\u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0623\u0646\u0641","\u062D\u0645\u0649 \u0627\u0644\u0642\u0634","anemia","\u0641\u0642\u0631 \u062F\u0645","\u0623\u0646\u064A\u0645\u064A\u0627","back pain","\u0623\u0644\u0645 \u0638\u0647\u0631","lower back pain","cold","common cold","\u0646\u0632\u0644\u0629 \u0628\u0631\u062F","\u0632\u0643\u0627\u0645","acne","\u062D\u0628 \u0627\u0644\u0634\u0628\u0627\u0628","insomnia","\u0627\u0644\u0623\u0631\u0642","\u0623\u0631\u0642","migraine","\u0627\u0644\u0635\u062F\u0627\u0639 \u0627\u0644\u0646\u0635\u0641\u064A","osteoporosis","\u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u0639\u0638\u0627\u0645","gastritis","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0629","hemorrhoids","\u0627\u0644\u0628\u0648\u0627\u0633\u064A\u0631","tinnitus","\u0637\u0646\u064A\u0646 \u0627\u0644\u0623\u0630\u0646","vertigo","\u062F\u0648\u0627\u0631","dizziness","psoriasis","\u0627\u0644\u0635\u062F\u0641\u064A\u0629","shingles","\u0627\u0644\u0647\u0631\u0628\u0633 \u0627\u0644\u0646\u0637\u0627\u0642\u064A","gout","\u0627\u0644\u0646\u0642\u0631\u0633","bronchitis","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629","pink eye","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629","conjunctivitis","sinusitis","\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u062C\u064A\u0648\u0628 \u0627\u0644\u0623\u0646\u0641\u064A\u0629","allergic reactions","\u0627\u0644\u062D\u0633\u0627\u0633\u064A\u0629","obesity","weight issues","\u0627\u0644\u0633\u0645\u0646\u0629","skin infections","\u0639\u062F\u0648\u0649 \u062C\u0644\u062F\u064A\u0629","stroke","\u0627\u0644\u0633\u0643\u062A\u0629 \u0627\u0644\u062F\u0645\u0627\u063A\u064A\u0629","eye strain","\u0625\u062C\u0647\u0627\u062F \u0627\u0644\u0639\u064A\u0646"];for(let a of s)e.includes(a)&&i.push(a);return[...new Set(i)]}generateMultiConditionResponse(l,e){let i=[];for(let r of l){let m=this.getConditionResponse(r,e);m&&i.push(m)}if(i.length===0)return e?"\u0639\u0630\u0631\u064B\u0627\u060C \u0644\u0627 \u0623\u0645\u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0643\u0627\u0641\u064A\u0629 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0629. \u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0628.":"Sorry, I don't have enough information about these multiple symptoms. Please consult a doctor.";let s=e?'<div class="disclaimer"><b>\u0645\u0644\u0627\u062D\u0638\u0629:</b> \u0647\u0630\u0647 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0627\u0645\u0629 \u0641\u0642\u0637. \u0627\u0633\u062A\u0634\u0631 \u0637\u0628\u064A\u0628\u0643 \u0642\u0628\u0644 \u062A\u0646\u0627\u0648\u0644 \u0623\u064A \u0623\u062F\u0648\u064A\u0629\u060C \u062E\u0627\u0635\u0629 \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0639\u0627\u0646\u064A \u0645\u0646 \u0639\u062F\u0629 \u062D\u0627\u0644\u0627\u062A \u0623\u0648 \u062A\u0623\u062E\u0630 \u0623\u062F\u0648\u064A\u0629 \u0623\u062E\u0631\u0649.</div>':'<div class="disclaimer"><b>NOTE:</b> This is general information only. Consult your doctor before taking any medications, especially if you have multiple conditions or take other drugs.</div>';return`
      <div class="multi-condition">
        ${e?`<div class="personal-note">${this.username}\u060C \u064A\u0628\u062F\u0648 \u0623\u0646 \u0644\u062F\u064A\u0643 \u0639\u062F\u0629 \u0623\u0639\u0631\u0627\u0636 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0639\u0646\u0627\u064A\u0629 \u062E\u0627\u0635\u0629.</div>`:`<div class="personal-note">${this.username}, it seems you have multiple symptoms that need special attention.</div>`}
        <h4>${e?"\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0645\u0642\u062A\u0631\u062D\u0629":"Suggested Treatments"}</h4>
        ${i.join("<hr>")}
        ${s}
      </div>
    `}generateSingleConditionResponse(l,e){let i=this.getConditionResponse(l,e);return i?i+(e?'<div class="disclaimer"><b>\u0645\u0644\u0627\u062D\u0638\u0629:</b> \u0627\u0633\u062A\u0634\u0631 \u0637\u0628\u064A\u0628\u0643 \u0642\u0628\u0644 \u062A\u0646\u0627\u0648\u0644 \u0623\u064A \u062F\u0648\u0627\u0621\u060C \u062E\u0627\u0635\u0629 \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0639\u0627\u0646\u064A \u0645\u0646 \u0623\u0645\u0631\u0627\u0636 \u0645\u0632\u0645\u0646\u0629 \u0623\u0648 \u062A\u0623\u062E\u0630 \u0623\u062F\u0648\u064A\u0629 \u0623\u062E\u0631\u0649.</div>':'<div class="disclaimer"><b>NOTE:</b> Always consult your doctor before taking any medication, especially if you have chronic conditions or take other drugs.</div>'):e?"\u0639\u0630\u0631\u064B\u0627\u060C \u0644\u0627 \u0623\u0645\u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0643\u0627\u0641\u064A\u0629 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0629. \u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0628.":"Sorry, I don't have enough information about this condition. Please consult a doctor."}getConditionResponse(l,e){let i={"headache, \u0635\u062F\u0627\u0639":{en:`<div class="condition-response">
              <h4>HEADACHE TREATMENT</h4>
              <div class="medications">
                <h5>Common Medications:</h5>
                <ul>
                  <li><b>Paracetamol (Acetaminophen):</b> 500-1000mg every 4-6 hours (Max 4000mg/day)</li>
                  <li><b>Ibuprofen:</b> 200-400mg every 6-8 hours (Max 1200mg/day)</li>
                  <li><b>Aspirin:</b> 325-650mg every 4-6 hours (Max 4000mg/day)</li>
                  <li><b>Naproxen:</b> 220-440mg initially, then 220mg every 8-12 hours</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>Warnings & Contraindications:</h5>
                <ul>
                  <li>Avoid NSAIDs (Ibuprofen, Aspirin, Naproxen) if you have:
                    <ul>
                      <li>Kidney disease</li>
                      <li>Stomach ulcers or GERD</li>
                      <li>Heart failure</li>
                      <li>Bleeding disorders</li>
                    </ul>
                  </li>
                  <li>Avoid Aspirin in children under 16 (Reye's syndrome risk)</li>
                </ul>
              </div>
              <div class="advice">
                <h5>Self-Care Advice:</h5>
                <ul>
                  <li>Rest in a dark, quiet room</li>
                  <li>Apply cold compress to forehead</li>
                  <li>Stay hydrated (drink water)</li>
                  <li>Practice relaxation techniques</li>
                  <li>Maintain regular sleep schedule</li>
                </ul>
              </div>
            </div>`,ar:`<div class="condition-response">
              <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0635\u062F\u0627\u0639</h4>
              <div class="medications">
                <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
                <ul>
                  <li><b>\u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644:</b> 500-1000 \u0645\u062C\u0645 \u0643\u0644 4-6 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 4000 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                  <li><b>\u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646:</b> 200-400 \u0645\u062C\u0645 \u0643\u0644 6-8 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 1200 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                  <li><b>\u0623\u0633\u0628\u0631\u064A\u0646:</b> 325-650 \u0645\u062C\u0645 \u0643\u0644 4-6 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 4000 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                  <li><b>\u0646\u0627\u0628\u0631\u0648\u0643\u0633\u064A\u0646:</b> 220-440 \u0645\u062C\u0645 \u062C\u0631\u0639\u0629 \u0623\u0648\u0644\u064A\u0629\u060C \u062B\u0645 220 \u0645\u062C\u0645 \u0643\u0644 8-12 \u0633\u0627\u0639\u0629</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0648\u0645\u0648\u0627\u0646\u0639 \u0627\u0644\u0627\u0633\u062A\u0639\u0645\u0627\u0644:</h5>
                <ul>
                  <li>\u062A\u062C\u0646\u0628 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628 (\u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646\u060C \u0623\u0633\u0628\u0631\u064A\u0646\u060C \u0646\u0627\u0628\u0631\u0648\u0643\u0633\u064A\u0646) \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0639\u0627\u0646\u064A \u0645\u0646:
                    <ul>
                      <li>\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0643\u0644\u0649</li>
                      <li>\u0642\u0631\u062D\u0629 \u0627\u0644\u0645\u0639\u062F\u0629 \u0623\u0648 \u0627\u0631\u062A\u062C\u0627\u0639 \u0627\u0644\u0645\u0631\u064A\u0621</li>
                      <li>\u0641\u0634\u0644 \u0627\u0644\u0642\u0644\u0628</li>
                      <li>\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062A \u0627\u0644\u0646\u0632\u064A\u0641</li>
                    </ul>
                  </li>
                  <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0633\u0628\u0631\u064A\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u062A\u062D\u062A 16 \u0633\u0646\u0629 (\u062E\u0637\u0631 \u0645\u062A\u0644\u0627\u0632\u0645\u0629 \u0631\u0627\u064A)</li>
                </ul>
              </div>
              <div class="advice">
                <h5>\u0646\u0635\u0627\u0626\u062D \u0644\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
                <ul>
                  <li>\u0627\u0644\u0631\u0627\u062D\u0629 \u0641\u064A \u063A\u0631\u0641\u0629 \u0645\u0638\u0644\u0645\u0629 \u0648\u0647\u0627\u062F\u0626\u0629</li>
                  <li>\u0636\u0639 \u0643\u0645\u0627\u062F\u0627\u062A \u0628\u0627\u0631\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0628\u0647\u0629</li>
                  <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0627\u062A \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
                  <li>\u0645\u0627\u0631\u0633 \u062A\u0645\u0627\u0631\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621</li>
                  <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062C\u062F\u0648\u0644 \u0646\u0648\u0645 \u0645\u0646\u062A\u0638\u0645</li>
                </ul>
              </div>
            </div>`},"fever, \u062D\u0645\u0649":{en:`<div class="condition-response">
              <h4>FEVER MANAGEMENT</h4>
              <div class="medications">
                <h5>Common Medications:</h5>
                <ul>
                  <li><b>Paracetamol (Acetaminophen):</b> 500-1000mg every 4-6 hours (Max 4000mg/day)</li>
                  <li><b>Ibuprofen:</b> 200-400mg every 6-8 hours (Max 1200mg/day)</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>Warnings & Contraindications:</h5>
                <ul>
                  <li>Avoid NSAIDs (Ibuprofen) if you have:
                    <ul>
                      <li>Kidney disease</li>
                      <li>Stomach ulcers or GERD</li>
                      <li>Heart failure</li>
                      <li>Bleeding disorders</li>
                    </ul>
                  </li>
                  <li>Avoid Aspirin in children under 16 (Reye's syndrome risk)</li>
                </ul>
              </div>
              <div class="advice">
                <h5>Self-Care Advice:</h5>
                <ul>
                  <li>Stay hydrated (drink plenty of fluids)</li>
                  <li>Rest and avoid strenuous activities</li>
                  <li>Wear light clothing to help cool down</li>
                  <li>Monitor temperature regularly</li>
                </ul>
              </div>
            </div>`,ar:`<div class="condition-response">
              <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0645\u0649</h4>
              <div class="medications">
                <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
                <ul>
                  <li><b>\u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644:</b> 500-1000 \u0645\u062C\u0645 \u0643\u0644 4-6 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 4000 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                  <li><b>\u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646:</b> 200-400 \u0645\u062C\u0645 \u0643\u0644 6-8 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 1200 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0648\u0645\u0648\u0627\u0646\u0639 \u0627\u0644\u0627\u0633\u062A\u0639\u0645\u0627\u0644:</h5>
                <ul>
                  <li>\u062A\u062C\u0646\u0628 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628 (\u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646) \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0639\u0627\u0646\u064A \u0645\u0646:
                    <ul>
                      <li>\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0643\u0644\u0649</li>
                      <li>\u0642\u0631\u062D\u0629 \u0627\u0644\u0645\u0639\u062F\u0629 \u0623\u0648 \u0627\u0631\u062A\u062C\u0627\u0639 \u0627\u0644\u0645\u0631\u064A\u0621</li>
                      <li>\u0641\u0634\u0644 \u0627\u0644\u0642\u0644\u0628</li>
                      <li>\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062A \u0627\u0644\u0646\u0632\u064A\u0641</li>
                    </ul>
                  </li>
                  <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0633\u0628\u0631\u064A\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u062A\u062D\u062A 16 \u0633\u0646\u0629 (\u062E\u0637\u0631 \u0645\u062A\u0644\u0627\u0632\u0645\u0629 \u0631\u0627\u064A)</li>
                </ul>
              </div>
              <div class="advice">
                <h5>\u0646\u0635\u0627\u0626\u062D \u0644\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
                <ul>
                  <li>\u0627\u0634\u0631\u0628 \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0633\u0648\u0627\u0626\u0644</li>
                  <li>\u0627\u0644\u0631\u0627\u062D\u0629 \u0648\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0645\u062C\u0647\u062F\u0629</li>
                  <li>\u0627\u0631\u062A\u062F\u0650 \u0645\u0644\u0627\u0628\u0633 \u062E\u0641\u064A\u0641\u0629 \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u064A\u062F</li>
                  <li>\u0631\u0627\u0642\u0628 \u062F\u0631\u062C\u0629 \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                </ul>
              </div>
            </div>`},"diabetes, \u0633\u0643\u0631\u064A, \u0633\u0643\u0631":{en:`<div class="condition-response">
              <h4>DIABETES MANAGEMENT</h4>
              <div class="medications">
                <h5>Common Medications:</h5>
                <ul>
                  <li><b>Metformin:</b> 500-1000mg twice daily (First-line treatment)</li>
                  <li><b>Gliclazide:</b> 40-320mg daily (Stimulates insulin secretion)</li>
                  <li><b>Insulin therapy:</b> Various types (Rapid, short, intermediate, long-acting)</li>
                  <li><b>Empagliflozin:</b> 10-25mg daily (SGLT2 inhibitor)</li>
                  <li><b>Liraglutide:</b> 0.6-1.8mg daily (GLP-1 receptor agonist)</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>Important Warnings:</h5>
                <ul>
                  <li>Metformin contraindicated in:
                    <ul>
                      <li>Severe kidney impairment (eGFR <30)</li>
                      <li>Liver disease</li>
                      <li>Conditions causing tissue hypoxia</li>
                    </ul>
                  </li>
                  <li>Sulfonylureas (Gliclazide) can cause hypoglycemia</li>
                  <li>Monitor for symptoms of ketoacidosis with SGLT2 inhibitors</li>
                </ul>
              </div>
              <div class="advice">
                <h5>Lifestyle Advice:</h5>
                <ul>
                  <li>Monitor blood sugar regularly</li>
                  <li>Follow a balanced, low-glycemic diet</li>
                  <li>Exercise regularly (150 mins/week)</li>
                  <li>Regular foot care and inspections</li>
                  <li>Carry glucose tablets for hypoglycemia</li>
                </ul>
              </div>
            </div>`,ar:`<div class="condition-response">
              <h4>\u0625\u062F\u0627\u0631\u0629 \u0645\u0631\u0636 \u0627\u0644\u0633\u0643\u0631\u064A</h4>
              <div class="medications">
                <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
                <ul>
                  <li><b>\u0645\u064A\u062A\u0641\u0648\u0631\u0645\u064A\u0646:</b> 500-1000 \u0645\u062C\u0645 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627 (\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0623\u0648\u0644\u064A)</li>
                  <li><b>\u062C\u0644\u064A\u0643\u0644\u0627\u0632\u064A\u062F:</b> 40-320 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 (\u064A\u062D\u0641\u0632 \u0625\u0641\u0631\u0627\u0632 \u0627\u0644\u0623\u0646\u0633\u0648\u0644\u064A\u0646)</li>
                  <li><b>\u0627\u0644\u0639\u0644\u0627\u062C \u0628\u0627\u0644\u0623\u0646\u0633\u0648\u0644\u064A\u0646:</b> \u0623\u0646\u0648\u0627\u0639 \u0645\u062E\u062A\u0644\u0641\u0629 (\u0633\u0631\u064A\u0639\u060C \u0642\u0635\u064A\u0631\u060C \u0645\u062A\u0648\u0633\u0637\u060C \u0637\u0648\u064A\u0644 \u0627\u0644\u0645\u0641\u0639\u0648\u0644)</li>
                  <li><b>\u0625\u0645\u0628\u0627\u062C\u0644\u064A\u0641\u0644\u0648\u0632\u064A\u0646:</b> 10-25 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 (\u0645\u062B\u0628\u0637 SGLT2)</li>
                  <li><b>\u0644\u064A\u0631\u0627\u062C\u0644\u0648\u062A\u0627\u064A\u062F:</b> 0.6-1.8 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 (\u0646\u0627\u0647\u0636 \u0645\u0633\u062A\u0642\u0628\u0644\u0627\u062A GLP-1)</li>
                </ul>
              </div>
              <div class="warnings">
                <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0647\u0627\u0645\u0629:</h5>
                <ul>
                  <li>\u064A\u0645\u0646\u0639 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u064A\u062A\u0641\u0648\u0631\u0645\u064A\u0646 \u0641\u064A:
                    <ul>
                      <li>\u0627\u0644\u0642\u0635\u0648\u0631 \u0627\u0644\u0643\u0644\u0648\u064A \u0627\u0644\u0634\u062F\u064A\u062F (eGFR <30)</li>
                      <li>\u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0643\u0628\u062F</li>
                      <li>\u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u0628\u0628 \u0646\u0642\u0635 \u0627\u0644\u0623\u0643\u0633\u062C\u0629</li>
                    </ul>
                  </li>
                  <li>\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0633\u0644\u0641\u0648\u0646\u064A\u0644 \u064A\u0648\u0631\u064A\u0627 (\u062C\u0644\u064A\u0643\u0644\u0627\u0632\u064A\u062F) \u0642\u062F \u062A\u0633\u0628\u0628 \u0627\u0646\u062E\u0641\u0627\u0636 \u0627\u0644\u0633\u0643\u0631</li>
                  <li>\u0645\u0631\u0627\u0642\u0628\u0629 \u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u062D\u0645\u0627\u0636 \u0627\u0644\u0643\u064A\u062A\u0648\u0646\u064A \u0645\u0639 \u0645\u062B\u0628\u0637\u0627\u062A SGLT2</li>
                </ul>
              </div>
              <div class="advice">
                <h5>\u0646\u0635\u0627\u0626\u062D \u0644\u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629:</h5>
                <ul>
                  <li>\u0645\u0631\u0627\u0642\u0628\u0629 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0633\u0643\u0631 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                  <li>\u0627\u062A\u0628\u0627\u0639 \u0646\u0638\u0627\u0645 \u063A\u0630\u0627\u0626\u064A \u0645\u062A\u0648\u0627\u0632\u0646 \u0645\u0646\u062E\u0641\u0636 \u0627\u0644\u0645\u0624\u0634\u0631 \u0627\u0644\u062C\u0644\u0627\u064A\u0633\u064A\u0645\u064A</li>
                  <li>\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0645 (150 \u062F\u0642\u064A\u0642\u0629/\u0623\u0633\u0628\u0648\u0639)</li>
                  <li>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0628\u0627\u0644\u0642\u062F\u0645\u064A\u0646 \u0648\u0641\u062D\u0635\u0647\u0627 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                  <li>\u0627\u062D\u0645\u0644 \u0623\u0642\u0631\u0627\u0635 \u0627\u0644\u062C\u0644\u0648\u0643\u0648\u0632 \u0644\u0639\u0644\u0627\u062C \u0627\u0646\u062E\u0641\u0627\u0636 \u0627\u0644\u0633\u0643\u0631</li>
                </ul>
              </div>
            </div>`},"cough, \u0633\u0639\u0627\u0644":{en:`<div class="condition-response">
            <h4>COUGH TREATMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>Dextromethorphan:</b> 10-30mg every 4-8 hours (Max 120mg/day)</li>
                <li><b>Guaifenesin:</b> 200-400mg every 4 hours (Max 2400mg/day)</li>
                <li><b>Codeine:</b> 10-20mg every 4-6 hours (Prescription only)</li>
                <li><b>Antihistamines:</b> For allergic cough (e.g., Loratadine, Cetirizine)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Avoid cough suppressants for productive cough</li>
                <li>Codeine is contraindicated in children under 12</li>
                <li>Seek medical attention if cough persists >3 weeks</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Stay hydrated</li>
                <li>Use honey (not for infants under 1)</li>
                <li>Humidify the air</li>
                <li>Avoid irritants (smoke, dust)</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0633\u0639\u0627\u0644</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u062F\u064A\u0643\u0633\u062A\u0631\u0648\u0645\u064A\u062B\u0648\u0631\u0641\u0627\u0646:</b> 10-30 \u0645\u062C\u0645 \u0643\u0644 4-8 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 120 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                <li><b>\u062C\u0648\u0627\u064A\u0641\u064A\u0646\u064A\u0633\u064A\u0646:</b> 200-400 \u0645\u062C\u0645 \u0643\u0644 4 \u0633\u0627\u0639\u0627\u062A (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 2400 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                <li><b>\u0643\u0648\u062F\u0627\u064A\u064A\u0646:</b> 10-20 \u0645\u062C\u0645 \u0643\u0644 4-6 \u0633\u0627\u0639\u0627\u062A (\u0628\u0648\u0635\u0641\u0629 \u0637\u0628\u064A\u0629 \u0641\u0642\u0637)</li>
                <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0644\u0644\u0633\u0639\u0627\u0644 \u0627\u0644\u062A\u062D\u0633\u0633\u064A (\u0644\u0648\u0631\u0627\u062A\u0627\u062F\u064A\u0646\u060C \u0633\u064A\u062A\u0631\u064A\u0632\u064A\u0646)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u062A\u062C\u0646\u0628 \u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0644\u0633\u0639\u0627\u0644 \u0644\u0644\u0633\u0639\u0627\u0644 \u0627\u0644\u0645\u0646\u062A\u062C \u0644\u0644\u0628\u0644\u063A\u0645</li>
                <li>\u064A\u0645\u0646\u0639 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0643\u0648\u062F\u0627\u064A\u064A\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644 \u062A\u062D\u062A 12 \u0633\u0646\u0629</li>
                <li>\u0627\u0633\u062A\u0634\u0631 \u0627\u0644\u0637\u0628\u064A\u0628 \u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631 \u0627\u0644\u0633\u0639\u0627\u0644 \u0623\u0643\u062B\u0631 \u0645\u0646 3 \u0623\u0633\u0627\u0628\u064A\u0639</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0627\u0634\u0631\u0628 \u0627\u0644\u0633\u0648\u0627\u0626\u0644 \u0628\u0643\u062B\u0631\u0629</li>
                <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0639\u0633\u0644 (\u0645\u0645\u0646\u0648\u0639 \u0644\u0644\u0631\u0636\u0639 \u062A\u062D\u062A \u0633\u0646\u0629)</li>
                <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0631\u0637\u0628 \u0627\u0644\u0647\u0648\u0627\u0621</li>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0647\u064A\u062C\u0627\u062A (\u0627\u0644\u062F\u062E\u0627\u0646\u060C \u0627\u0644\u063A\u0628\u0627\u0631)</li>
              </ul>
            </div>
          </div>`},"asthma, \u0631\u0628\u0648":{en:`<div class="condition-response">
            <h4>ASTHMA MANAGEMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>Salbutamol inhaler:</b> 1-2 puffs every 4-6 hours as needed</li>
                <li><b>Beclomethasone inhaler:</b> 1-2 puffs twice daily</li>
                <li><b>Montelukast:</b> 10mg tablet daily (for allergic asthma)</li>
                <li><b>Prednisone:</b> 20-50mg daily for acute attacks (short-term)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Rinse mouth after steroid inhalers to prevent thrush</li>
                <li>Seek emergency care if symptoms worsen despite medication</li>
                <li>Avoid triggers (dust, smoke, pollen)</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Use spacer with inhalers</li>
                <li>Monitor peak flow regularly</li>
                <li>Have an action plan for attacks</li>
                <li>Get annual flu vaccine</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u0628\u0648</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0628\u062E\u0627\u062E \u0627\u0644\u0633\u0627\u0644\u0628\u0648\u062A\u0627\u0645\u0648\u0644:</b> 1-2 \u0628\u062E\u0629 \u0643\u0644 4-6 \u0633\u0627\u0639\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u062C\u0629</li>
                <li><b>\u0628\u062E\u0627\u062E \u0627\u0644\u0628\u064A\u0643\u0644\u0648\u0645\u064A\u062B\u0627\u0632\u0648\u0646:</b> 1-2 \u0628\u062E\u0629 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0645\u0648\u0646\u062A\u064A\u0644\u0648\u0643\u0627\u0633\u062A:</b> 10 \u0645\u062C\u0645 \u0642\u0631\u0635 \u064A\u0648\u0645\u064A\u064B\u0627 (\u0644\u0644\u0631\u0628\u0648 \u0627\u0644\u062A\u062D\u0633\u0633\u064A)</li>
                <li><b>\u0628\u0631\u064A\u062F\u0646\u064A\u0632\u0648\u0646:</b> 20-50 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 \u0644\u0644\u0646\u0648\u0628\u0627\u062A \u0627\u0644\u062D\u0627\u062F\u0629 (\u0642\u0635\u064A\u0631 \u0627\u0644\u0645\u062F\u0649)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0627\u0634\u0637\u0641 \u0641\u0645\u0643 \u0628\u0639\u062F \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0628\u062E\u0627\u062E\u0627\u062A \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u064A\u0629 \u0644\u0645\u0646\u0639 \u0627\u0644\u0639\u062F\u0648\u0649 \u0627\u0644\u0641\u0637\u0631\u064A\u0629</li>
                <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0631\u0639\u0627\u064A\u0629 \u0627\u0644\u0637\u0627\u0631\u0626\u0629 \u0625\u0630\u0627 \u062A\u0641\u0627\u0642\u0645\u062A \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0631\u063A\u0645 \u0627\u0644\u062F\u0648\u0627\u0621</li>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u062D\u0641\u0632\u0627\u062A (\u0627\u0644\u063A\u0628\u0627\u0631\u060C \u0627\u0644\u062F\u062E\u0627\u0646\u060C \u062D\u0628\u0648\u0628 \u0627\u0644\u0644\u0642\u0627\u062D)</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0627\u0633\u062A\u062E\u062F\u0645 spacer \u0645\u0639 \u0627\u0644\u0628\u062E\u0627\u062E\u0627\u062A</li>
                <li>\u0631\u0627\u0642\u0628 \u0630\u0631\u0648\u0629 \u0627\u0644\u062A\u062F\u0641\u0642 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                <li>\u0636\u0639 \u062E\u0637\u0629 \u0639\u0645\u0644 \u0644\u0644\u0646\u0648\u0628\u0627\u062A</li>
                <li>\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0644\u0642\u0627\u062D \u0627\u0644\u0625\u0646\u0641\u0644\u0648\u0646\u0632\u0627 \u0627\u0644\u0633\u0646\u0648\u064A</li>
              </ul>
            </div>
          </div>`},"diarrhea, \u0625\u0633\u0647\u0627\u0644":{en:`<div class="condition-response">
            <h4>DIARRHEA TREATMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>Loperamide:</b> 4mg initially, then 2mg after each loose stool (Max 16mg/day)</li>
                <li><b>Oral rehydration salts:</b> As directed to prevent dehydration</li>
                <li><b>Bismuth subsalicylate:</b> 524mg every 30-60 minutes as needed</li>
                <li><b>Probiotics:</b> Saccharomyces boulardii or Lactobacillus strains</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Avoid loperamide in bloody diarrhea or fever</li>
                <li>Seek medical help if diarrhea lasts >2 days</li>
                <li>Watch for signs of dehydration</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>BRAT diet (Bananas, Rice, Applesauce, Toast)</li>
                <li>Avoid dairy, fatty foods, caffeine</li>
                <li>Wash hands frequently</li>
                <li>Disinfect contaminated surfaces</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0625\u0633\u0647\u0627\u0644</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0644\u0648\u0628\u064A\u0631\u0627\u0645\u064A\u062F:</b> 4 \u0645\u062C\u0645 \u062C\u0631\u0639\u0629 \u0623\u0648\u0644\u064A\u0629\u060C \u062B\u0645 2 \u0645\u062C\u0645 \u0628\u0639\u062F \u0643\u0644 \u0628\u0631\u0627\u0632 \u0633\u0627\u0626\u0644 (\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 16 \u0645\u062C\u0645/\u064A\u0648\u0645)</li>
                <li><b>\u0623\u0645\u0644\u0627\u062D \u0627\u0644\u0625\u0645\u0627\u0647\u0629 \u0627\u0644\u0641\u0645\u0648\u064A\u0629:</b> \u062D\u0633\u0628 \u0627\u0644\u062A\u0648\u062C\u064A\u0647\u0627\u062A \u0644\u0645\u0646\u0639 \u0627\u0644\u062C\u0641\u0627\u0641</li>
                <li><b>\u0628\u0633\u0645\u0648\u062B \u0633\u0628\u0633\u0627\u0644\u064A\u0633\u064A\u0644\u0627\u062A:</b> 524 \u0645\u062C\u0645 \u0643\u0644 30-60 \u062F\u0642\u064A\u0642\u0629 \u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u062C\u0629</li>
                <li><b>\u0627\u0644\u0628\u0631\u0648\u0628\u064A\u0648\u062A\u064A\u0643:</b> \u0633\u0643\u0627\u0631\u0648\u0645\u0627\u064A\u0633\u0633 \u0628\u0648\u0644\u0627\u0631\u062F\u064A \u0623\u0648 \u0633\u0644\u0627\u0644\u0627\u062A \u0644\u0627\u0643\u062A\u0648\u0628\u0627\u0633\u064A\u0644\u0648\u0633</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0644\u0648\u0628\u064A\u0631\u0627\u0645\u064A\u062F \u0641\u064A \u0627\u0644\u0625\u0633\u0647\u0627\u0644 \u0627\u0644\u062F\u0645\u0648\u064A \u0623\u0648 \u0645\u0639 \u0627\u0644\u062D\u0645\u0649</li>
                <li>\u0627\u0633\u062A\u0634\u0631 \u0627\u0644\u0637\u0628\u064A\u0628 \u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631 \u0627\u0644\u0625\u0633\u0647\u0627\u0644 \u0623\u0643\u062B\u0631 \u0645\u0646 \u064A\u0648\u0645\u064A\u0646</li>
                <li>\u0631\u0627\u0642\u0628 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062C\u0641\u0627\u0641</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0646\u0638\u0627\u0645 BRAT \u0627\u0644\u063A\u0630\u0627\u0626\u064A (\u0645\u0648\u0632\u060C \u0623\u0631\u0632\u060C \u0635\u0644\u0635\u0629 \u062A\u0641\u0627\u062D\u060C \u062A\u0648\u0633\u062A)</li>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0644\u0628\u0627\u0646\u060C \u0627\u0644\u0623\u0637\u0639\u0645\u0629 \u0627\u0644\u062F\u0647\u0646\u064A\u0629\u060C \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646</li>
                <li>\u0627\u063A\u0633\u0644 \u064A\u062F\u064A\u0643 frequently</li>
                <li>\u0639\u0642\u0645 \u0627\u0644\u0623\u0633\u0637\u062D \u0627\u0644\u0645\u0644\u0648\u062B\u0629</li>
              </ul>
            </div>
          </div>`},"eczema, \u0625\u0643\u0632\u064A\u0645\u0627":{en:`<div class="condition-response">
            <h4>ECZEMA MANAGEMENT</h4>
            <div class="medications">
              <h5>Common Treatments:</h5>
              <ul>
                <li><b>Hydrocortisone cream 1%:</b> Apply thinly twice daily</li>
                <li><b>Moisturizers:</b> Fragrance-free creams (Cerave, Eucerin)</li>
                <li><b>Antihistamines:</b> For itching (e.g., Cetirizine 10mg daily)</li>
                <li><b>Tacrolimus ointment:</b> For resistant cases</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Don't use strong steroids on face or genitals</li>
                <li>Avoid scratching to prevent infection</li>
                <li>Watch for signs of skin infection</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Use lukewarm water for bathing</li>
                <li>Apply moisturizer within 3 minutes after bathing</li>
                <li>Wear cotton clothing</li>
                <li>Use fragrance-free detergents</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0625\u0643\u0632\u064A\u0645\u0627</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0643\u0631\u064A\u0645 \u0647\u064A\u062F\u0631\u0648\u0643\u0648\u0631\u062A\u064A\u0632\u0648\u0646 1%:</b> \u0636\u0639 \u0637\u0628\u0642\u0629 \u0631\u0642\u064A\u0642\u0629 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0627\u0644\u0645\u0631\u0637\u0628\u0627\u062A:</b> \u0643\u0631\u064A\u0645\u0627\u062A \u062E\u0627\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0639\u0637\u0648\u0631 (\u0633\u064A\u0631\u0627\u0641\u060C \u064A\u0648\u0633\u064A\u0631\u064A\u0646)</li>
                <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0644\u0644\u062D\u0643\u0629 (\u0633\u064A\u062A\u0631\u064A\u0632\u064A\u0646 10 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627)</li>
                <li><b>\u0645\u0631\u0647\u0645 \u062A\u0627\u0643\u0631\u0648\u0644\u064A\u0645\u0648\u0633:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A \u0627\u0644\u0642\u0648\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0648\u062C\u0647 \u0623\u0648 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0627\u0644\u062A\u0646\u0627\u0633\u0644\u064A\u0629</li>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u062D\u0643 \u0644\u0645\u0646\u0639 \u0627\u0644\u0639\u062F\u0648\u0649</li>
                <li>\u0631\u0627\u0642\u0628 \u0639\u0644\u0627\u0645\u0627\u062A \u0639\u062F\u0648\u0649 \u0627\u0644\u062C\u0644\u062F</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0627\u0621 \u0641\u0627\u062A\u0631\u0627 \u0644\u0644\u0627\u0633\u062A\u062D\u0645\u0627\u0645</li>
                <li>\u0636\u0639 \u0627\u0644\u0645\u0631\u0637\u0628 \u062E\u0644\u0627\u0644 3 \u062F\u0642\u0627\u0626\u0642 \u0628\u0639\u062F \u0627\u0644\u0627\u0633\u062A\u062D\u0645\u0627\u0645</li>
                <li>\u0627\u0631\u062A\u062F\u0650 \u0645\u0644\u0627\u0628\u0633 \u0642\u0637\u0646\u064A\u0629</li>
                <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0646\u0638\u0641\u0627\u062A \u062E\u0627\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0639\u0637\u0648\u0631</li>
              </ul>
            </div>
          </div>`},"conjunctivitis, \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629":{en:`<div class="condition-response">
            <h4>CONJUNCTIVITIS TREATMENT</h4>
            <div class="medications">
              <h5>Common Treatments:</h5>
              <ul>
                <li><b>Antibiotic drops:</b> For bacterial cases (e.g., Chloramphenicol)</li>
                <li><b>Antihistamine drops:</b> For allergic cases (e.g., Ketotifen)</li>
                <li><b>Artificial tears:</b> For viral or irritant cases</li>
                <li><b>Cold compresses:</b> To relieve discomfort</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Don't share towels or pillows</li>
                <li>Avoid wearing contact lenses</li>
                <li>Seek help if vision is affected</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Wash hands frequently</li>
                <li>Clean eyelids with sterile wipes</li>
                <li>Avoid rubbing eyes</li>
                <li>Discard eye makeup after infection</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0642\u0637\u0631\u0627\u062A \u0645\u0636\u0627\u062F \u062D\u064A\u0648\u064A:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0628\u0643\u062A\u064A\u0631\u064A\u0629 (\u0643\u0644\u0648\u0631\u0627\u0645\u0641\u064A\u0646\u064A\u0643\u0648\u0644)</li>
                <li><b>\u0642\u0637\u0631\u0627\u062A \u0645\u0636\u0627\u062F \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u062D\u0633\u0633\u064A\u0629 (\u0643\u064A\u062A\u0648\u062A\u064A\u0641\u064A\u0646)</li>
                <li><b>\u0627\u0644\u062F\u0645\u0648\u0639 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u0629:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0641\u064A\u0631\u0648\u0633\u064A\u0629 \u0623\u0648 \u0627\u0644\u0645\u0647\u064A\u062C\u0629</li>
                <li><b>\u0643\u0645\u0627\u062F\u0627\u062A \u0628\u0627\u0631\u062F\u0629:</b> \u0644\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0627\u0646\u0632\u0639\u0627\u062C</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0644\u0627 \u062A\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0646\u0627\u0634\u0641 \u0623\u0648 \u0627\u0644\u0648\u0633\u0627\u0626\u062F</li>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0631\u062A\u062F\u0627\u0621 \u0627\u0644\u0639\u062F\u0633\u0627\u062A \u0627\u0644\u0644\u0627\u0635\u0642\u0629</li>
                <li>\u0627\u0633\u062A\u0634\u0631 \u0627\u0644\u0637\u0628\u064A\u0628 \u0625\u0630\u0627 \u062A\u0623\u062B\u0631\u062A \u0627\u0644\u0631\u0624\u064A\u0629</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0627\u063A\u0633\u0644 \u064A\u062F\u064A\u0643 frequently</li>
                <li>\u0646\u0638\u0641 \u0627\u0644\u062C\u0641\u0648\u0646 \u0628\u0645\u0646\u0627\u062F\u064A\u0644 \u0645\u0639\u0642\u0645\u0629</li>
                <li>\u062A\u062C\u0646\u0628 \u0641\u0631\u0643 \u0627\u0644\u0639\u064A\u0646\u064A\u0646</li>
                <li>\u062A\u062E\u0644\u0635 \u0645\u0646 \u0645\u0643\u064A\u0627\u062C \u0627\u0644\u0639\u064A\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u0639\u062F\u0648\u0649</li>
              </ul>
            </div>
          </div>`},"uti, urinary tract infection, \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629":{en:`<div class="condition-response">
            <h4>URINARY TRACT INFECTION TREATMENT</h4>
            <div class="medications">
              <h5>Common Antibiotics:</h5>
              <ul>
                <li><b>Nitrofurantoin:</b> 100mg twice daily for 5 days</li>
                <li><b>Trimethoprim-sulfamethoxazole:</b> 1 DS tablet twice daily for 3 days</li>
                <li><b>Fosfomycin:</b> 3g single dose</li>
                <li><b>Ciprofloxacin:</b> 250mg twice daily for 3 days (resistant cases)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Complete full course of antibiotics</li>
                <li>Seek help for fever, flank pain, or pregnancy</li>
                <li>Drink plenty of fluids</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Prevention:</h5>
              <ul>
                <li>Wipe front to back</li>
                <li>Urinate after intercourse</li>
                <li>Stay hydrated</li>
                <li>Avoid irritating feminine products</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0633\u0627\u0644\u0643 \u0627\u0644\u0628\u0648\u0644\u064A\u0629</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0646\u062A\u0631\u0648\u0641\u0648\u0631\u0627\u0646\u062A\u0648\u064A\u0646:</b> 100 \u0645\u062C\u0645 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627 \u0644\u0645\u062F\u0629 5 \u0623\u064A\u0627\u0645</li>
                <li><b>\u062A\u0631\u064A\u0645\u064A\u062B\u0648\u0628\u0631\u064A\u0645-\u0633\u0644\u0641\u0627\u0645\u064A\u062B\u0648\u0643\u0633\u0627\u0632\u0648\u0644:</b> \u0642\u0631\u0635 DS \u0648\u0627\u062D\u062F \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627 \u0644\u0645\u062F\u0629 3 \u0623\u064A\u0627\u0645</li>
                <li><b>\u0641\u0648\u0633\u0641\u0648\u0645\u064A\u0633\u064A\u0646:</b> 3 \u062C\u0645 \u062C\u0631\u0639\u0629 \u0648\u0627\u062D\u062F\u0629</li>
                <li><b>\u0633\u064A\u0628\u0631\u0648\u0641\u0644\u0648\u0643\u0633\u0627\u0633\u064A\u0646:</b> 250 \u0645\u062C\u0645 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627 \u0644\u0645\u062F\u0629 3 \u0623\u064A\u0627\u0645 (\u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0648\u0645\u0629)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0623\u0643\u0645\u0644 \u0627\u0644\u062C\u0631\u0639\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0636\u0627\u062F \u0627\u0644\u062D\u064A\u0648\u064A</li>
                <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0646\u062F \u0648\u062C\u0648\u062F \u062D\u0645\u0649\u060C \u0623\u0644\u0645 \u0641\u064A \u0627\u0644\u062E\u0627\u0635\u0631\u0629\u060C \u0623\u0648 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0645\u0644</li>
                <li>\u0627\u0634\u0631\u0628 \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0633\u0648\u0627\u0626\u0644</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
              <ul>
                <li>\u0627\u0645\u0633\u062D \u0645\u0646 \u0627\u0644\u0623\u0645\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641</li>
                <li>\u062A\u0628\u0648\u0644 \u0628\u0639\u062F \u0627\u0644\u062C\u0645\u0627\u0639</li>
                <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0631\u0637\u0648\u0628\u0629 \u0627\u0644\u062C\u0633\u0645</li>
                <li>\u062A\u062C\u0646\u0628 \u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u0646\u0633\u0627\u0626\u064A\u0629 \u0627\u0644\u0645\u0647\u064A\u062C\u0629</li>
              </ul>
            </div>
          </div>`},"pms, \u0645\u062A\u0644\u0627\u0632\u0645\u0629 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062D\u064A\u0636":{en:`<div class="condition-response">
            <h4>PMS MANAGEMENT</h4>
            <div class="medications">
              <h5>Common Treatments:</h5>
              <ul>
                <li><b>NSAIDs:</b> Ibuprofen 400mg every 6-8 hours</li>
                <li><b>Oral contraceptives:</b> For hormonal regulation</li>
                <li><b>Calcium supplements:</b> 1200mg daily</li>
                <li><b>SSRIs:</b> For severe mood symptoms (e.g., Fluoxetine 20mg daily)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Avoid excessive salt and caffeine</li>
                <li>Consider PMDD if symptoms are severe</li>
                <li>Rule out other conditions</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Regular exercise</li>
                <li>Balanced diet</li>
                <li>Stress management</li>
                <li>Track symptoms in a diary</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0625\u062F\u0627\u0631\u0629 \u0645\u062A\u0644\u0627\u0632\u0645\u0629 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062D\u064A\u0636</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628:</b> \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646 400 \u0645\u062C\u0645 \u0643\u0644 6-8 \u0633\u0627\u0639\u0627\u062A</li>
                <li><b>\u062D\u0628\u0648\u0628 \u0645\u0646\u0639 \u0627\u0644\u062D\u0645\u0644:</b> \u0644\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0647\u0631\u0645\u0648\u0646\u0627\u062A</li>
                <li><b>\u0645\u0643\u0645\u0644\u0627\u062A \u0627\u0644\u0643\u0627\u0644\u0633\u064A\u0648\u0645:</b> 1200 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0633\u064A\u0631\u0648\u062A\u0648\u0646\u064A\u0646:</b> \u0644\u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u0645\u0632\u0627\u062C \u0627\u0644\u0634\u062F\u064A\u062F\u0629 (\u0641\u0644\u0648\u0643\u0633\u064A\u062A\u064A\u0646 20 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627)</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0644\u062D \u0648\u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646 \u0627\u0644\u0632\u0627\u0626\u062F</li>
                <li>\u0641\u0643\u0631 \u0641\u064A \u0627\u0636\u0637\u0631\u0627\u0628 \u0645\u0627 \u0642\u0628\u0644 \u0627\u0644\u062D\u064A\u0636 \u0627\u0644\u0645\u0632\u0639\u062C \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0634\u062F\u064A\u062F\u0629</li>
                <li>\u0627\u0633\u062A\u0628\u0639\u062F \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                <li>\u0646\u0638\u0627\u0645 \u063A\u0630\u0627\u0626\u064A \u0645\u062A\u0648\u0627\u0632\u0646</li>
                <li>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0625\u062C\u0647\u0627\u062F</li>
                <li>\u0633\u062C\u0644 \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0641\u064A \u0645\u0641\u0643\u0631\u0629</li>
              </ul>
            </div>
          </div>`},"arthritis, \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u0635\u0644":{en:`<div class="condition-response">
            <h4>ARTHRITIS MANAGEMENT</h4>
            <div class="medications">
              <h5>Common Treatments:</h5>
              <ul>
                <li><b>NSAIDs:</b> Ibuprofen 400-800mg every 6-8 hours</li>
                <li><b>Acetaminophen:</b> 500-1000mg every 6 hours</li>
                <li><b>DMARDs:</b> For rheumatoid arthritis (e.g., Methotrexate)</li>
                <li><b>Topical creams:</b> Capsaicin or NSAID gels</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Long-term NSAID use requires stomach protection</li>
                <li>Monitor for gastrointestinal bleeding</li>
                <li>Regular blood tests needed with DMARDs</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Low-impact exercise (swimming, cycling)</li>
                <li>Weight management</li>
                <li>Heat/cold therapy</li>
                <li>Assistive devices if needed</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u0635\u0644</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628:</b> \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646 400-800 \u0645\u062C\u0645 \u0643\u0644 6-8 \u0633\u0627\u0639\u0627\u062A</li>
                <li><b>\u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644:</b> 500-1000 \u0645\u062C\u0645 \u0643\u0644 6 \u0633\u0627\u0639\u0627\u062A</li>
                <li><b>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0645\u0636\u0627\u062F\u0629 \u0644\u0644\u0631\u0648\u0645\u0627\u062A\u064A\u0632\u0645:</b> \u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u0635\u0644 \u0627\u0644\u0631\u0648\u0645\u0627\u062A\u0648\u064A\u062F\u064A (\u0645\u064A\u062B\u0648\u062A\u0631\u064A\u0643\u0633\u0627\u062A)</li>
                <li><b>\u0643\u0631\u064A\u0645\u0627\u062A \u0645\u0648\u0636\u0639\u064A\u0629:</b> \u0643\u0628\u0633\u0627\u064A\u0633\u064A\u0646 \u0623\u0648 \u062C\u0644 \u0645\u0636\u0627\u062F \u0644\u0644\u0627\u0644\u062A\u0647\u0627\u0628</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F \u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u064A\u062A\u0637\u0644\u0628 \u062D\u0645\u0627\u064A\u0629 \u0644\u0644\u0645\u0639\u062F\u0629</li>
                <li>\u0631\u0627\u0642\u0628 \u0646\u0632\u064A\u0641 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u0647\u0636\u0645\u064A</li>
                <li>\u062A\u062D\u0627\u0644\u064A\u0644 \u062F\u0645 \u062F\u0648\u0631\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629 \u0645\u0639 \u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0645\u0636\u0627\u062F\u0629 \u0644\u0644\u0631\u0648\u0645\u0627\u062A\u064A\u0632\u0645</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u062A\u0645\u0627\u0631\u064A\u0646 \u0645\u0646\u062E\u0641\u0636\u0629 \u0627\u0644\u062A\u0623\u062B\u064A\u0631 (\u0633\u0628\u0627\u062D\u0629\u060C \u0631\u0643\u0648\u0628 \u062F\u0631\u0627\u062C\u0627\u062A)</li>
                <li>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646</li>
                <li>\u0627\u0644\u0639\u0644\u0627\u062C \u0628\u0627\u0644\u062D\u0631\u0627\u0631\u0629/\u0627\u0644\u0628\u0631\u0648\u062F\u0629</li>
                <li>\u0623\u062F\u0648\u0627\u062A \u0645\u0633\u0627\u0639\u062F\u0629 \u0625\u0630\u0627 \u0644\u0632\u0645 \u0627\u0644\u0623\u0645\u0631</li>
              </ul>
            </div>
          </div>`},"hypertension, high blood pressure, \u0627\u0631\u062A\u0641\u0627\u0639 \u0636\u063A\u0637 \u0627\u0644\u062F\u0645":{en:`<div class="condition-response">
            <h4>HYPERTENSION MANAGEMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>ACE inhibitors:</b> Lisinopril 5-40mg daily</li>
                <li><b>ARBs:</b> Losartan 25-100mg daily</li>
                <li><b>Calcium channel blockers:</b> Amlodipine 5-10mg daily</li>
                <li><b>Diuretics:</b> Hydrochlorothiazide 12.5-25mg daily</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Regular BP monitoring required</li>
                <li>Don't stop medications abruptly</li>
                <li>Watch for side effects (cough with ACE inhibitors)</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Lifestyle Changes:</h5>
              <ul>
                <li>Reduce salt intake</li>
                <li>Regular exercise</li>
                <li>Weight management</li>
                <li>Limit alcohol</li>
                <li>Stress reduction</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0631\u062A\u0641\u0627\u0639 \u0636\u063A\u0637 \u0627\u0644\u062F\u0645</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0644\u0625\u0646\u0632\u064A\u0645 \u0627\u0644\u0645\u062D\u0648\u0644 \u0644\u0644\u0623\u0646\u062C\u064A\u0648\u062A\u0646\u0633\u064A\u0646:</b> \u0644\u064A\u0633\u064A\u0646\u0648\u0628\u0631\u064A\u0644 5-40 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u062D\u0627\u0635\u0631\u0627\u062A \u0645\u0633\u062A\u0642\u0628\u0644\u0627\u062A \u0627\u0644\u0623\u0646\u062C\u064A\u0648\u062A\u0646\u0633\u064A\u0646:</b> \u0644\u0648\u0633\u0627\u0631\u062A\u0627\u0646 25-100 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u062D\u0627\u0635\u0631\u0627\u062A \u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0643\u0627\u0644\u0633\u064A\u0648\u0645:</b> \u0623\u0645\u0644\u0648\u062F\u064A\u0628\u064A\u0646 5-10 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0645\u062F\u0631\u0627\u062A \u0627\u0644\u0628\u0648\u0644:</b> \u0647\u064A\u062F\u0631\u0648\u0643\u0644\u0648\u0631\u0648\u062B\u064A\u0627\u0632\u064A\u062F 12.5-25 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0645\u0637\u0644\u0648\u0628 \u0645\u0631\u0627\u0642\u0628\u0629 \u0645\u0646\u062A\u0638\u0645\u0629 \u0644\u0636\u063A\u0637 \u0627\u0644\u062F\u0645</li>
                <li>\u0644\u0627 \u062A\u062A\u0648\u0642\u0641 \u0639\u0646 \u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0641\u062C\u0623\u0629</li>
                <li>\u0631\u0627\u0642\u0628 \u0627\u0644\u0622\u062B\u0627\u0631 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629 (\u0627\u0644\u0633\u0639\u0627\u0644 \u0645\u0639 \u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0644\u0625\u0646\u0632\u064A\u0645 \u0627\u0644\u0645\u062D\u0648\u0644 \u0644\u0644\u0623\u0646\u062C\u064A\u0648\u062A\u0646\u0633\u064A\u0646)</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629:</h5>
              <ul>
                <li>\u0642\u0644\u0644 \u0645\u0646 \u062A\u0646\u0627\u0648\u0644 \u0627\u0644\u0645\u0644\u062D</li>
                <li>\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                <li>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646</li>
                <li>\u062D\u062F \u0645\u0646 \u0627\u0644\u0643\u062D\u0648\u0644</li>
                <li>\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062A\u0648\u062A\u0631</li>
              </ul>
            </div>
          </div>`},"depression, \u0627\u0643\u062A\u0626\u0627\u0628":{en:`<div class="condition-response">
            <h4>DEPRESSION TREATMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>SSRIs:</b> Fluoxetine 20-80mg daily, Sertraline 50-200mg daily</li>
                <li><b>SNRIs:</b> Venlafaxine 75-225mg daily, Duloxetine 60-120mg daily</li>
                <li><b>Atypical antidepressants:</b> Bupropion 150-450mg daily</li>
                <li><b>Cognitive behavioral therapy:</b> First-line for mild cases</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Antidepressants may take 4-6 weeks to work</li>
                <li>Don't stop abruptly (taper slowly)</li>
                <li>Monitor for suicidal thoughts initially</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Regular sleep schedule</li>
                <li>Social support</li>
                <li>Physical activity</li>
                <li>Mindfulness techniques</li>
                <li>Light therapy for seasonal depression</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0627\u0643\u062A\u0626\u0627\u0628</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0633\u064A\u0631\u0648\u062A\u0648\u0646\u064A\u0646:</b> \u0641\u0644\u0648\u0643\u0633\u064A\u062A\u064A\u0646 20-80 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627\u060C \u0633\u064A\u0631\u062A\u0631\u0627\u0644\u064A\u0646 50-200 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0627\u0644\u0633\u064A\u0631\u0648\u062A\u0648\u0646\u064A\u0646 \u0648\u0627\u0644\u0646\u0648\u0631\u0627\u0628\u064A\u0646\u0641\u0631\u064A\u0646:</b> \u0641\u064A\u0646\u0644\u0627\u0641\u0627\u0643\u0633\u064A\u0646 75-225 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627\u060C \u062F\u0648\u0644\u0648\u0643\u0633\u062A\u064A\u0646 60-120 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0643\u062A\u0626\u0627\u0628 \u063A\u064A\u0631 \u0627\u0644\u0646\u0645\u0637\u064A\u0629:</b> \u0628\u0648\u0628\u0631\u0648\u0628\u064A\u0648\u0646 150-450 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
                <li><b>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0633\u0644\u0648\u0643\u064A \u0627\u0644\u0645\u0639\u0631\u0641\u064A:</b> \u0627\u0644\u062E\u0637 \u0627\u0644\u0623\u0648\u0644 \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062E\u0641\u064A\u0641\u0629</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0642\u062F \u062A\u0633\u062A\u063A\u0631\u0642 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0643\u062A\u0626\u0627\u0628 4-6 \u0623\u0633\u0627\u0628\u064A\u0639 \u0644\u062A\u0639\u0645\u0644</li>
                <li>\u0644\u0627 \u062A\u062A\u0648\u0642\u0641 \u0641\u062C\u0623\u0629 (\u0642\u0644\u0644 \u0627\u0644\u062C\u0631\u0639\u0629 \u062A\u062F\u0631\u064A\u062C\u064A\u064B\u0627)</li>
                <li>\u0631\u0627\u0642\u0628 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0627\u0646\u062A\u062D\u0627\u0631\u064A\u0629 \u0641\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0629</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u062C\u062F\u0648\u0644 \u0646\u0648\u0645 \u0645\u0646\u062A\u0638\u0645</li>
                <li>\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A</li>
                <li>\u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u0628\u062F\u0646\u064A</li>
                <li>\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u064A\u0642\u0638\u0629</li>
                <li>\u0627\u0644\u0639\u0644\u0627\u062C \u0628\u0627\u0644\u0636\u0648\u0621 \u0644\u0644\u0627\u0643\u062A\u0626\u0627\u0628 \u0627\u0644\u0645\u0648\u0633\u0645\u064A</li>
              </ul>
            </div>
          </div>`},"hypothyroidism, \u0642\u0635\u0648\u0631 \u0627\u0644\u063A\u062F\u0629 \u0627\u0644\u062F\u0631\u0642\u064A\u0629":{en:`<div class="condition-response">
            <h4>HYPOTHYROIDISM TREATMENT</h4>
            <div class="medications">
              <h5>Common Medications:</h5>
              <ul>
                <li><b>Levothyroxine:</b> 25-200mcg daily (dose based on TSH levels)</li>
                <li><b>Take on empty stomach:</b> 30-60 minutes before breakfast</li>
                <li><b>Avoid interactions:</b> Calcium, iron, PPIs, soy</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>Warnings:</h5>
              <ul>
                <li>Don't adjust dose without doctor's advice</li>
                <li>Regular TSH monitoring required</li>
                <li>Watch for symptoms of over-treatment</li>
              </ul>
            </div>
            <div class="advice">
              <h5>Self-Care:</h5>
              <ul>
                <li>Consistent medication timing</li>
                <li>Balanced diet with adequate iodine</li>
                <li>Regular follow-ups</li>
                <li>Monitor for symptom changes</li>
              </ul>
            </div>
          </div>`,ar:`<div class="condition-response">
            <h4>\u0639\u0644\u0627\u062C \u0642\u0635\u0648\u0631 \u0627\u0644\u063A\u062F\u0629 \u0627\u0644\u062F\u0631\u0642\u064A\u0629</h4>
            <div class="medications">
              <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
              <ul>
                <li><b>\u0644\u064A\u0641\u0648\u062B\u064A\u0631\u0648\u0643\u0633\u064A\u0646:</b> 25-200 \u0645\u064A\u0643\u0631\u0648\u062C\u0631\u0627\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 (\u0627\u0644\u062C\u0631\u0639\u0629 \u062D\u0633\u0628 \u0645\u0633\u062A\u0648\u0649 TSH)</li>
                <li><b>\u062A\u0646\u0627\u0648\u0644 \u0639\u0644\u0649 \u0645\u0639\u062F\u0629 \u0641\u0627\u0631\u063A\u0629:</b> 30-60 \u062F\u0642\u064A\u0642\u0629 \u0642\u0628\u0644 \u0627\u0644\u0625\u0641\u0637\u0627\u0631</li>
                <li><b>\u062A\u062C\u0646\u0628 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A:</b> \u0627\u0644\u0643\u0627\u0644\u0633\u064A\u0648\u0645\u060C \u0627\u0644\u062D\u062F\u064A\u062F\u060C \u0645\u062B\u0628\u0637\u0627\u062A \u0645\u0636\u062E\u0629 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0646\u060C \u0627\u0644\u0635\u0648\u064A\u0627</li>
              </ul>
            </div>
            <div class="warnings">
              <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
              <ul>
                <li>\u0644\u0627 \u062A\u0639\u062F\u0644 \u0627\u0644\u062C\u0631\u0639\u0629 \u062F\u0648\u0646 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0628</li>
                <li>\u0645\u0637\u0644\u0648\u0628 \u0645\u0631\u0627\u0642\u0628\u0629 TSH \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
                <li>\u0631\u0627\u0642\u0628 \u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0632\u0627\u0626\u062F</li>
              </ul>
            </div>
            <div class="advice">
              <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
              <ul>
                <li>\u0645\u0648\u0627\u0639\u064A\u062F \u062B\u0627\u0628\u062A\u0629 \u0644\u0644\u062F\u0648\u0627\u0621</li>
                <li>\u0646\u0638\u0627\u0645 \u063A\u0630\u0627\u0626\u064A \u0645\u062A\u0648\u0627\u0632\u0646 \u0645\u0639 \u0627\u0644\u064A\u0648\u062F \u0627\u0644\u0643\u0627\u0641\u064A</li>
                <li>\u0645\u062A\u0627\u0628\u0639\u0629 \u0645\u0646\u062A\u0638\u0645\u0629</li>
                <li>\u0631\u0627\u0642\u0628 \u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0623\u0639\u0631\u0627\u0636</li>
              </ul>
            </div>
          </div>`},"gerd, acid reflux, heartburn, \u0627\u0631\u062A\u062C\u0627\u0639, \u062D\u0631\u0642\u0629":{en:`<div class="condition-response">
        <h4>ACID REFLUX (GERD) TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Antacids:</b> Tums, Maalox (as needed)</li>
            <li><b>H2 blockers:</b> Famotidine 20-40mg daily</li>
            <li><b>PPIs:</b> Omeprazole 20mg daily before breakfast</li>
            <li><b>Alginate drugs:</b> Gaviscon after meals</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Long-term PPI use may cause nutrient deficiencies</li>
            <li>Avoid lying down 2-3 hours after eating</li>
            <li>Rule out heart disease for chest pain</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Lifestyle Changes:</h5>
          <ul>
            <li>Elevate head of bed 6-8 inches</li>
            <li>Avoid trigger foods (spicy, fatty, citrus, caffeine)</li>
            <li>Eat smaller, more frequent meals</li>
            <li>Maintain healthy weight</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0631\u062A\u062C\u0627\u0639 \u0627\u0644\u0645\u0631\u064A\u0621</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u0645\u0648\u0636\u0629:</b> \u062A\u0627\u0645\u0633\u060C \u0645\u0627\u0644\u0648\u0643\u0633 (\u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u062C\u0629)</li>
            <li><b>\u062D\u0627\u0635\u0631\u0627\u062A H2:</b> \u0641\u0627\u0645\u0648\u062A\u064A\u062F\u064A\u0646 20-40 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0645\u0636\u062E\u0629 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0646:</b> \u0623\u0648\u0645\u064A\u0628\u0631\u0627\u0632\u0648\u0644 20 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 \u0642\u0628\u0644 \u0627\u0644\u0625\u0641\u0637\u0627\u0631</li>
            <li><b>\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0623\u0644\u062C\u064A\u0646\u0627\u062A:</b> \u062C\u0627\u0641\u064A\u0633\u0643\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u0648\u062C\u0628\u0627\u062A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F \u0644\u0645\u062B\u0628\u0637\u0627\u062A \u0645\u0636\u062E\u0629 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0646 \u0642\u062F \u064A\u0633\u0628\u0628 \u0646\u0642\u0635\u064B\u0627 \u0641\u064A \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u063A\u0630\u0627\u0626\u064A\u0629</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0627\u0633\u062A\u0644\u0642\u0627\u0621 \u0628\u0639\u062F \u0627\u0644\u0623\u0643\u0644 \u0628\u0640 2-3 \u0633\u0627\u0639\u0627\u062A</li>
            <li>\u0627\u0633\u062A\u0628\u0639\u062F \u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0642\u0644\u0628 \u0644\u0623\u0644\u0645 \u0627\u0644\u0635\u062F\u0631</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629:</h5>
          <ul>
            <li>\u0627\u0631\u0641\u0639 \u0631\u0623\u0633 \u0627\u0644\u0633\u0631\u064A\u0631 6-8 \u0628\u0648\u0635\u0627\u062A</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0637\u0639\u0645\u0629 \u0627\u0644\u0645\u062D\u0641\u0632\u0629 (\u0627\u0644\u062D\u0627\u0631\u0629\u060C \u0627\u0644\u062F\u0647\u0646\u064A\u0629\u060C \u0627\u0644\u062D\u0645\u0636\u064A\u0627\u062A\u060C \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646)</li>
            <li>\u062A\u0646\u0627\u0648\u0644 \u0648\u062C\u0628\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u0645\u062A\u0643\u0631\u0631\u0629</li>
            <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0648\u0632\u0646 \u0635\u062D\u064A</li>
          </ul>
        </div>
      </div>`},"allergic rhinitis, hay fever, \u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0623\u0646\u0641, \u062D\u0645\u0649 \u0627\u0644\u0642\u0634":{en:`<div class="condition-response">
        <h4>ALLERGIC RHINITIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Antihistamines:</b> Loratadine 10mg daily, Cetirizine 10mg daily</li>
            <li><b>Nasal steroids:</b> Fluticasone nasal spray daily</li>
            <li><b>Decongestants:</b> Pseudoephedrine (short-term use only)</li>
            <li><b>Eye drops:</b> Ketotifen for allergic conjunctivitis</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Nasal steroids may cause nosebleeds</li>
            <li>Decongestants can raise blood pressure</li>
            <li>First-gen antihistamines cause drowsiness</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Prevention:</h5>
          <ul>
            <li>Use HEPA air filters</li>
            <li>Wash bedding weekly in hot water</li>
            <li>Keep windows closed during pollen season</li>
            <li>Shower after outdoor exposure</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0623\u0646\u0641</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0644\u0648\u0631\u0627\u062A\u0627\u062F\u064A\u0646 10 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627\u060C \u0633\u064A\u062A\u0631\u064A\u0632\u064A\u0646 10 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0628\u062E\u0627\u062E\u0627\u062A \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u064A\u0629:</b> \u0641\u0644\u0648\u062A\u064A\u0643\u0627\u0632\u0648\u0646 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0645\u0632\u064A\u0644\u0627\u062A \u0627\u0644\u0627\u062D\u062A\u0642\u0627\u0646:</b> \u0633\u0648\u062F\u0648\u0625\u064A\u0641\u064A\u062F\u0631\u064A\u0646 (\u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0642\u0635\u064A\u0631 \u0627\u0644\u0645\u062F\u0649 \u0641\u0642\u0637)</li>
            <li><b>\u0642\u0637\u0631\u0627\u062A \u0627\u0644\u0639\u064A\u0646:</b> \u0643\u064A\u062A\u0648\u062A\u064A\u0641\u064A\u0646 \u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629 \u0627\u0644\u062A\u062D\u0633\u0633\u064A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0628\u062E\u0627\u062E\u0627\u062A \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u064A\u0629 \u0642\u062F \u062A\u0633\u0628\u0628 \u0646\u0632\u064A\u0641 \u0627\u0644\u0623\u0646\u0641</li>
            <li>\u0645\u0632\u064A\u0644\u0627\u062A \u0627\u0644\u0627\u062D\u062A\u0642\u0627\u0646 \u0642\u062F \u062A\u0631\u0641\u0639 \u0636\u063A\u0637 \u0627\u0644\u062F\u0645</li>
            <li>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646 \u0645\u0646 \u0627\u0644\u062C\u064A\u0644 \u0627\u0644\u0623\u0648\u0644 \u062A\u0633\u0628\u0628 \u0627\u0644\u0646\u0639\u0627\u0633</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0641\u0644\u0627\u062A\u0631 \u0647\u0648\u0627\u0621 HEPA</li>
            <li>\u0627\u063A\u0633\u0644 \u0627\u0644\u0641\u0631\u0627\u0634 \u0623\u0633\u0628\u0648\u0639\u064A\u064B\u0627 \u0628\u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u0633\u0627\u062E\u0646</li>
            <li>\u0623\u063A\u0644\u0642 \u0627\u0644\u0646\u0648\u0627\u0641\u0630 \u062E\u0644\u0627\u0644 \u0645\u0648\u0633\u0645 \u062D\u0628\u0648\u0628 \u0627\u0644\u0644\u0642\u0627\u062D</li>
            <li>\u0627\u0633\u062A\u062D\u0645 \u0628\u0639\u062F \u0627\u0644\u062A\u0639\u0631\u0636 \u0644\u0644\u062E\u0627\u0631\u062C</li>
          </ul>
        </div>
      </div>`},"anemia, \u0641\u0642\u0631 \u062F\u0645, \u0623\u0646\u064A\u0645\u064A\u0627":{en:`<div class="condition-response">
        <h4>ANEMIA TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Iron supplements:</b> Ferrous sulfate 325mg 1-3 times daily</li>
            <li><b>Vitamin C:</b> Enhances iron absorption (take with iron)</li>
            <li><b>B12 injections:</b> For pernicious anemia</li>
            <li><b>Folic acid:</b> For folate deficiency anemia</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Iron causes dark stools and constipation</li>
            <li>Take iron on empty stomach (unless GI upset occurs)</li>
            <li>Avoid calcium/antacids with iron (space by 2 hours)</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Dietary Advice:</h5>
          <ul>
            <li>Iron-rich foods: red meat, spinach, lentils</li>
            <li>Vitamin C-rich foods with iron meals</li>
            <li>Avoid tea/coffee with meals (inhibits iron absorption)</li>
            <li>Cook in cast iron pans</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0641\u0642\u0631 \u0627\u0644\u062F\u0645</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0643\u0645\u0644\u0627\u062A \u0627\u0644\u062D\u062F\u064A\u062F:</b> \u0633\u0644\u0641\u0627\u062A \u0627\u0644\u062D\u062F\u064A\u062F\u0648\u0632 325 \u0645\u062C\u0645 1-3 \u0645\u0631\u0627\u062A \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0641\u064A\u062A\u0627\u0645\u064A\u0646 \u0633\u064A:</b> \u064A\u0639\u0632\u0632 \u0627\u0645\u062A\u0635\u0627\u0635 \u0627\u0644\u062D\u062F\u064A\u062F (\u062A\u0646\u0627\u0648\u0644\u0647 \u0645\u0639 \u0627\u0644\u062D\u062F\u064A\u062F)</li>
            <li><b>\u062D\u0642\u0646 B12:</b> \u0644\u0641\u0642\u0631 \u0627\u0644\u062F\u0645 \u0627\u0644\u062E\u0628\u064A\u062B</li>
            <li><b>\u062D\u0645\u0636 \u0627\u0644\u0641\u0648\u0644\u064A\u0643:</b> \u0644\u0641\u0642\u0631 \u0627\u0644\u062F\u0645 \u0627\u0644\u0646\u0627\u062A\u062C \u0639\u0646 \u0646\u0642\u0635 \u0627\u0644\u0641\u0648\u0644\u0627\u062A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0627\u0644\u062D\u062F\u064A\u062F \u064A\u0633\u0628\u0628 \u0628\u0631\u0627\u0632 \u062F\u0627\u0643\u0646 \u0648\u0625\u0645\u0633\u0627\u0643</li>
            <li>\u062E\u0630 \u0627\u0644\u062D\u062F\u064A\u062F \u0639\u0644\u0649 \u0645\u0639\u062F\u0629 \u0641\u0627\u0631\u063A\u0629 (\u0625\u0644\u0627 \u0625\u0630\u0627 \u062D\u062F\u062B \u0627\u0636\u0637\u0631\u0627\u0628 \u0641\u064A \u0627\u0644\u0645\u0639\u062F\u0629)</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0643\u0627\u0644\u0633\u064A\u0648\u0645/\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u0645\u0648\u0636\u0629 \u0645\u0639 \u0627\u0644\u062D\u062F\u064A\u062F (\u0627\u0641\u0635\u0644 \u0628\u064A\u0646\u0647\u0645\u0627 \u0628\u0633\u0627\u0639\u062A\u064A\u0646)</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0646\u0635\u0627\u0626\u062D \u063A\u0630\u0627\u0626\u064A\u0629:</h5>
          <ul>
            <li>\u0623\u0637\u0639\u0645\u0629 \u063A\u0646\u064A\u0629 \u0628\u0627\u0644\u062D\u062F\u064A\u062F: \u0627\u0644\u0644\u062D\u0648\u0645 \u0627\u0644\u062D\u0645\u0631\u0627\u0621\u060C \u0627\u0644\u0633\u0628\u0627\u0646\u062E\u060C \u0627\u0644\u0639\u062F\u0633</li>
            <li>\u0623\u0637\u0639\u0645\u0629 \u063A\u0646\u064A\u0629 \u0628\u0641\u064A\u062A\u0627\u0645\u064A\u0646 \u0633\u064A \u0645\u0639 \u0648\u062C\u0628\u0627\u062A \u0627\u0644\u062D\u062F\u064A\u062F</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0634\u0627\u064A/\u0627\u0644\u0642\u0647\u0648\u0629 \u0645\u0639 \u0627\u0644\u0648\u062C\u0628\u0627\u062A (\u062A\u062B\u0628\u0637 \u0627\u0645\u062A\u0635\u0627\u0635 \u0627\u0644\u062D\u062F\u064A\u062F)</li>
            <li>\u0627\u0637\u0628\u062E \u0641\u064A \u0623\u0648\u0627\u0646\u064A \u062D\u062F\u064A\u062F\u064A\u0629</li>
          </ul>
        </div>
      </div>`},"back pain, \u0623\u0644\u0645 \u0638\u0647\u0631, lower back pain":{en:`<div class="condition-response">
        <h4>BACK PAIN MANAGEMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>NSAIDs:</b> Ibuprofen 400-800mg every 6-8 hours</li>
            <li><b>Muscle relaxants:</b> Cyclobenzaprine 5-10mg at bedtime</li>
            <li><b>Topical analgesics:</b> Diclofenac gel</li>
            <li><b>Acetaminophen:</b> 500-1000mg every 6 hours</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Red Flags (Seek Immediate Care):</h5>
          <ul>
            <li>Bowel/bladder incontinence</li>
            <li>Leg weakness/numbness</li>
            <li>History of cancer</li>
            <li>Fever with back pain</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Stay active (avoid prolonged bed rest)</li>
            <li>Apply heat/ice packs</li>
            <li>Practice good posture</li>
            <li>Core-strengthening exercises</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0625\u062F\u0627\u0631\u0629 \u0622\u0644\u0627\u0645 \u0627\u0644\u0638\u0647\u0631</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628:</b> \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646 400-800 \u0645\u062C\u0645 \u0643\u0644 6-8 \u0633\u0627\u0639\u0627\u062A</li>
            <li><b>\u0645\u0631\u062E\u064A\u0627\u062A \u0627\u0644\u0639\u0636\u0644\u0627\u062A:</b> \u0633\u064A\u0643\u0644\u0648\u0628\u0646\u0632\u0627\u0628\u0631\u064A\u0646 5-10 \u0645\u062C\u0645 \u0639\u0646\u062F \u0627\u0644\u0646\u0648\u0645</li>
            <li><b>\u0645\u0633\u0643\u0646\u0627\u062A \u0645\u0648\u0636\u0639\u064A\u0629:</b> \u062C\u0644 \u062F\u064A\u0643\u0644\u0648\u0641\u064A\u0646\u0627\u0643</li>
            <li><b>\u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644:</b> 500-1000 \u0645\u062C\u0645 \u0643\u0644 6 \u0633\u0627\u0639\u0627\u062A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0639\u0644\u0627\u0645\u0627\u062A \u062E\u0637\u0631 (\u0627\u0637\u0644\u0628 \u0627\u0644\u0631\u0639\u0627\u064A\u0629 \u0641\u0648\u0631\u064B\u0627):</h5>
          <ul>
            <li>\u0633\u0644\u0633 \u0627\u0644\u0628\u0648\u0644/\u0627\u0644\u0628\u0631\u0627\u0632</li>
            <li>\u0636\u0639\u0641/\u062A\u0646\u0645\u064A\u0644 \u0627\u0644\u0633\u0627\u0642</li>
            <li>\u062A\u0627\u0631\u064A\u062E \u0645\u0646 \u0627\u0644\u0633\u0631\u0637\u0627\u0646</li>
            <li>\u062D\u0645\u0649 \u0645\u0639 \u0623\u0644\u0645 \u0627\u0644\u0638\u0647\u0631</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0646\u0634\u0627\u0637 (\u062A\u062C\u0646\u0628 \u0627\u0644\u0631\u0627\u062D\u0629 \u0641\u064A \u0627\u0644\u0641\u0631\u0627\u0634 \u0644\u0641\u062A\u0631\u0627\u062A \u0637\u0648\u064A\u0644\u0629)</li>
            <li>\u0636\u0639 \u0643\u0645\u0627\u062F\u0627\u062A \u0633\u0627\u062E\u0646\u0629/\u0628\u0627\u0631\u062F\u0629</li>
            <li>\u0645\u0627\u0631\u0633 \u0648\u0636\u0639\u064A\u0629 \u062C\u064A\u062F\u0629</li>
            <li>\u062A\u0645\u0627\u0631\u064A\u0646 \u062A\u0642\u0648\u064A\u0629 \u0627\u0644\u0639\u0636\u0644\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629</li>
          </ul>
        </div>
      </div>`},"cold, common cold, \u0646\u0632\u0644\u0629 \u0628\u0631\u062F, \u0632\u0643\u0627\u0645":{en:`<div class="condition-response">
        <h4>COMMON COLD TREATMENT</h4>
        <div class="medications">
          <h5>Symptom Relief:</h5>
          <ul>
            <li><b>Decongestants:</b> Pseudoephedrine (oral) or oxymetazoline (nasal spray)</li>
            <li><b>Antihistamines:</b> Diphenhydramine at night (helps with sleep)</li>
            <li><b>Cough suppressants:</b> Dextromethorphan</li>
            <li><b>Pain relievers:</b> Acetaminophen or ibuprofen</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Don't use antibiotics for viral colds</li>
            <li>Limit nasal decongestant sprays to 3 days</li>
            <li>Watch for secondary infections (ear/sinus)</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Rest and stay hydrated</li>
            <li>Use saline nasal rinses</li>
            <li>Honey for cough (not under 1 year)</li>
            <li>Humidify the air</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0646\u0632\u0644\u0629 \u0627\u0644\u0628\u0631\u062F</h4>
        <div class="medications">
          <h5>\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0623\u0639\u0631\u0627\u0636:</h5>
          <ul>
            <li><b>\u0645\u0632\u064A\u0644\u0627\u062A \u0627\u0644\u0627\u062D\u062A\u0642\u0627\u0646:</b> \u0633\u0648\u062F\u0648\u0625\u064A\u0641\u064A\u062F\u0631\u064A\u0646 (\u0641\u0645\u0648\u064A) \u0623\u0648 \u0623\u0648\u0643\u0633\u064A\u0645\u064A\u062A\u0627\u0632\u0648\u0644\u064A\u0646 (\u0628\u062E\u0627\u062E \u0623\u0646\u0641\u064A)</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u062F\u0627\u064A\u0641\u064A\u0646\u0647\u0627\u064A\u062F\u0631\u0627\u0645\u064A\u0646 \u0644\u064A\u0644\u0627\u064B (\u064A\u0633\u0627\u0639\u062F \u0639\u0644\u0649 \u0627\u0644\u0646\u0648\u0645)</li>
            <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0644\u0633\u0639\u0627\u0644:</b> \u062F\u064A\u0643\u0633\u062A\u0631\u0648\u0645\u064A\u062B\u0648\u0631\u0641\u0627\u0646</li>
            <li><b>\u0645\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0623\u0644\u0645:</b> \u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644 \u0623\u0648 \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629 \u0644\u0644\u0628\u0631\u062F \u0627\u0644\u0641\u064A\u0631\u0648\u0633\u064A</li>
            <li>\u0642\u0644\u0644 \u0645\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u062E\u0627\u062E\u0627\u062A \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0645\u0632\u064A\u0644\u0629 \u0644\u0644\u0627\u062D\u062A\u0642\u0627\u0646 \u0625\u0644\u0649 3 \u0623\u064A\u0627\u0645</li>
            <li>\u0631\u0627\u0642\u0628 \u0627\u0644\u0639\u062F\u0648\u0649 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 (\u0627\u0644\u0623\u0630\u0646/\u0627\u0644\u062C\u064A\u0648\u0628)</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0633\u062A\u0631\u062D \u0648\u0627\u0634\u0631\u0628 \u0627\u0644\u0633\u0648\u0627\u0626\u0644</li>
            <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u063A\u0633\u0648\u0644 \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0645\u0627\u0644\u062D</li>
            <li>\u0627\u0644\u0639\u0633\u0644 \u0644\u0644\u0633\u0639\u0627\u0644 (\u0645\u0645\u0646\u0648\u0639 \u062A\u062D\u062A \u0633\u0646\u0629)</li>
            <li>\u0631\u0637\u0628 \u0627\u0644\u0647\u0648\u0627\u0621</li>
          </ul>
        </div>
      </div>`},"acne, \u062D\u0628 \u0627\u0644\u0634\u0628\u0627\u0628":{en:`<div class="condition-response">
    <h4><i class="fas fa-bacteria icon-head"></i> Acne Treatment</h4>

    <div class="medications">
      <h5><i class="fas fa-capsules"></i> Medications:</h5>
      <ul>
        <li><b>Benzoyl Peroxide:</b> 2.5%-10% topical gel once or twice daily</li>
        <li><b>Topical Retinoids:</b> Adapalene or Tretinoin (apply at night)</li>
        <li><b>Oral Antibiotics:</b> Doxycycline, Minocycline (moderate/severe)</li>
        <li><b>Oral Isotretinoin:</b> For severe cases (under medical supervision)</li>
      </ul>
    </div>

    <div class="warnings">
      <h5><i class="fas fa-triangle-exclamation"></i> Warnings:</h5>
      <ul>
        <li>Increased sun sensitivity</li>
        <li>Do not pop pimples \u2014 may scar</li>
        <li>Avoid isotretinoin during pregnancy</li>
      </ul>
    </div>

    <div class="advice">
      <h5><i class="fas fa-lightbulb"></i> Self-Care Tips:</h5>
      <ul>
        <li>Use gentle cleansers twice daily</li>
        <li>Avoid oily products</li>
        <li>Stay hydrated and reduce stress</li>
      </ul>
    </div>
  </div>`,ar:`<div class="condition-response">
    <h4><i class="fas fa-bacteria icon-head"></i> \u0639\u0644\u0627\u062C \u062D\u0628 \u0627\u0644\u0634\u0628\u0627\u0628</h4>

    <div class="medications">
      <h5><i class="fas fa-capsules"></i> \u0627\u0644\u0623\u062F\u0648\u064A\u0629:</h5>
      <ul>
        <li><b>\u0628\u0646\u0632\u0648\u064A\u0644 \u0628\u064A\u0631\u0648\u0643\u0633\u064A\u062F:</b> \u062C\u0644 \u0645\u0648\u0636\u0639\u064A \u0628\u062A\u0631\u0643\u064A\u0632 2.5%-10%</li>
        <li><b>\u0627\u0644\u0631\u064A\u062A\u064A\u0646\u0648\u064A\u062F\u0627\u062A:</b> \u0623\u062F\u0627\u0628\u0627\u0644\u064A\u0646 \u0623\u0648 \u062A\u0631\u064A\u062A\u064A\u0646\u0648\u064A\u0646 (\u0644\u064A\u0644\u0627\u064B)</li>
        <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u062D\u064A\u0648\u064A\u0629 \u0641\u0645\u0648\u064A\u0629:</b> \u062F\u0648\u0643\u0633\u064A\u0633\u064A\u0643\u0644\u064A\u0646\u060C \u0645\u064A\u0646\u0648\u0633\u064A\u0643\u0644\u064A\u0646</li>
        <li><b>\u0627\u064A\u0632\u0648\u062A\u0631\u064A\u062A\u064A\u0646\u0648\u064A\u0646:</b> \u0644\u062D\u0627\u0644\u0627\u062A \u062D\u0628 \u0627\u0644\u0634\u0628\u0627\u0628 \u0627\u0644\u0634\u062F\u064A\u062F\u0629</li>
      </ul>
    </div>

    <div class="warnings">
      <h5><i class="fas fa-triangle-exclamation"></i> \u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
      <ul>
        <li>\u062D\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0634\u0645\u0633 \u0645\u0639 \u0628\u0639\u0636 \u0627\u0644\u0623\u062F\u0648\u064A\u0629</li>
        <li>\u0644\u0627 \u062A\u0641\u0642\u0639 \u0627\u0644\u062D\u0628\u0648\u0628</li>
        <li>\u064A\u0645\u0646\u0639 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0627\u064A\u0632\u0648\u062A\u0631\u064A\u062A\u064A\u0646\u0648\u064A\u0646 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0645\u0644</li>
      </ul>
    </div>

    <div class="advice">
      <h5><i class="fas fa-lightbulb"></i> \u0646\u0635\u0627\u0626\u062D:</h5>
      <ul>
        <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u063A\u0633\u0648\u0644\u064B\u0627 \u0644\u0637\u064A\u0641\u064B\u0627 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627</li>
        <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u062F\u0647\u0646\u064A\u0629</li>
        <li>\u0627\u0634\u0631\u0628 \u0645\u0627\u0621 \u0648\u0642\u0644\u0644 \u0627\u0644\u062A\u0648\u062A\u0631</li>
      </ul>
    </div>
  </div>`},"Insomnia , \u0627\u0644\u0623\u0631\u0642, insomnia, \u0623\u0631\u0642 ":{en:`<div class="condition-response">
        <h4>INSOMNIA TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Melatonin:</b> 1-5mg 1 hour before bedtime</li>
            <li><b>Diphenhydramine:</b> 25-50mg at bedtime</li>
            <li><b>Prescription sleep aids:</b> Zolpidem, Eszopiclone (short-term use)</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Avoid alcohol with sleep medications</li>
            <li>Don't use long-term without doctor supervision</li>
            <li>May cause next-day drowsiness</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Sleep Hygiene Tips:</h5>
          <ul>
            <li>Maintain regular sleep schedule</li>
            <li>Create dark, quiet sleep environment</li>
            <li>Avoid screens 1 hour before bed</li>
            <li>Limit caffeine after noon</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0623\u0631\u0642</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u0645\u064A\u0644\u0627\u062A\u0648\u0646\u064A\u0646:</b> 1-5 \u0645\u062C\u0645 \u0642\u0628\u0644 \u0627\u0644\u0646\u0648\u0645 \u0628\u0633\u0627\u0639\u0629</li>
            <li><b>\u062F\u0627\u064A\u0641\u064A\u0646\u0647\u0627\u064A\u062F\u0631\u0627\u0645\u064A\u0646:</b> 25-50 \u0645\u062C\u0645 \u0639\u0646\u062F \u0627\u0644\u0646\u0648\u0645</li>
            <li><b>\u0645\u0646\u0648\u0645\u0627\u062A \u0645\u0648\u0635\u0648\u0641\u0629:</b> \u0632\u0648\u0644\u0628\u064A\u062F\u064A\u0645\u060C \u0625\u064A\u0632\u0648\u0628\u064A\u0643\u0644\u0648\u0646 (\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0642\u0635\u064A\u0631 \u0627\u0644\u0645\u062F\u0649)</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0643\u062D\u0648\u0644 \u0645\u0639 \u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0645\u0646\u0648\u0645\u0629</li>
            <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0644\u0641\u062A\u0631\u0627\u062A \u0637\u0648\u064A\u0644\u0629 \u062F\u0648\u0646 \u0625\u0634\u0631\u0627\u0641 \u0637\u0628\u064A</li>
            <li>\u0642\u062F \u062A\u0633\u0628\u0628 \u0627\u0644\u0646\u0639\u0627\u0633 \u0641\u064A \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u062A\u0627\u0644\u064A</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0646\u0635\u0627\u0626\u062D \u0644\u0646\u0648\u0645 \u0635\u062D\u064A:</h5>
          <ul>
            <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u062C\u062F\u0648\u0644 \u0646\u0648\u0645 \u0645\u0646\u062A\u0638\u0645</li>
            <li>\u062C\u0647\u0632 \u0628\u064A\u0626\u0629 \u0646\u0648\u0645 \u0645\u0638\u0644\u0645\u0629 \u0648\u0647\u0627\u062F\u0626\u0629</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0634\u0627\u0634\u0627\u062A \u0642\u0628\u0644 \u0627\u0644\u0646\u0648\u0645 \u0628\u0633\u0627\u0639\u0629</li>
            <li>\u0642\u0644\u0644 \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646 \u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631</li>
          </ul>
        </div>
      </div>`},"Migraine, migraine, \u0627\u0644\u0635\u062F\u0627\u0639 \u0627\u0644\u0646\u0635\u0641\u064A":{en:`<div class="condition-response">
        <h4>MIGRAINE TREATMENT</h4>
        <div class="medications">
          <h5>Acute Treatments:</h5>
          <ul>
            <li><b>Triptans:</b> Sumatriptan 50-100mg at onset</li>
            <li><b>NSAIDs:</b> Ibuprofen 400-600mg</li>
            <li><b>Anti-nausea:</b> Metoclopramide 10mg</li>
          </ul>
          <h5>Preventive Treatments:</h5>
          <ul>
            <li><b>Propranolol:</b> 40-240mg daily</li>
            <li><b>Topiramate:</b> 25-100mg daily</li>
            <li><b>Amitriptyline:</b> 10-75mg at bedtime</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Limit triptans to 10 days/month</li>
            <li>Avoid opioids/butalbital for migraine</li>
            <li>Watch for medication-overuse headache</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Trigger Management:</h5>
          <ul>
            <li>Identify and avoid personal triggers</li>
            <li>Maintain regular sleep and meals</li>
            <li>Stay hydrated</li>
            <li>Consider relaxation techniques</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0635\u062F\u0627\u0639 \u0627\u0644\u0646\u0635\u0641\u064A</h4>
        <div class="medications">
          <h5>\u0639\u0644\u0627\u062C\u0627\u062A \u062D\u0627\u062F\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u062A\u0631\u064A\u0628\u062A\u0627\u0646\u0627\u062A:</b> \u0633\u0648\u0645\u0627\u062A\u0631\u064A\u0628\u062A\u0627\u0646 50-100 \u0645\u062C\u0645 \u0639\u0646\u062F \u0627\u0644\u0628\u062F\u0621</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628:</b> \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646 400-600 \u0645\u062C\u0645</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0642\u064A\u0621:</b> \u0645\u064A\u062A\u0648\u0643\u0644\u0648\u0628\u0631\u0627\u0645\u064A\u062F 10 \u0645\u062C\u0645</li>
          </ul>
          <h5>\u0639\u0644\u0627\u062C\u0627\u062A \u0648\u0642\u0627\u0626\u064A\u0629:</h5>
          <ul>
            <li><b>\u0628\u0631\u0648\u0628\u0631\u0627\u0646\u0648\u0644\u0648\u0644:</b> 40-240 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u062A\u0648\u0628\u064A\u0631\u0627\u0645\u064A\u062A:</b> 25-100 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0623\u0645\u064A\u062A\u0631\u064A\u0628\u062A\u064A\u0644\u064A\u0646:</b> 10-75 \u0645\u062C\u0645 \u0639\u0646\u062F \u0627\u0644\u0646\u0648\u0645</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062A\u0631\u064A\u0628\u062A\u0627\u0646\u0627\u062A \u0623\u0643\u062B\u0631 \u0645\u0646 10 \u0623\u064A\u0627\u0645/\u0634\u0647\u0631</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0623\u0641\u064A\u0648\u0646\u064A\u0629 \u0644\u0644\u0635\u062F\u0627\u0639 \u0627\u0644\u0646\u0635\u0641\u064A</li>
            <li>\u0627\u062D\u0630\u0631 \u0645\u0646 \u0635\u062F\u0627\u0639 \u0641\u0631\u0637 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u062F\u0648\u064A\u0629</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062D\u0641\u0632\u0627\u062A:</h5>
          <ul>
            <li>\u062D\u062F\u062F \u0648\u062A\u062C\u0646\u0628 \u0645\u062D\u0641\u0632\u0627\u062A\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629</li>
            <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0646\u0648\u0645 \u0648\u0648\u062C\u0628\u0627\u062A \u0645\u0646\u062A\u0638\u0645\u0629</li>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u062C\u0631\u0628 \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621</li>
          </ul>
        </div>
      </div>`},"Osteoporosis , \u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u0639\u0638\u0627\u0645":{en:`<div class="condition-response">
        <h4>OSTEOPOROSIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Bisphosphonates:</b> Alendronate 70mg weekly</li>
            <li><b>Calcium:</b> 1000-1200mg daily with Vitamin D</li>
            <li><b>Vitamin D:</b> 800-2000 IU daily</li>
            <li><b>Other options:</b> Denosumab, Teriparatide</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Take bisphosphonates on empty stomach with water</li>
            <li>Remain upright for 30-60 minutes after dose</li>
            <li>Dental exams before starting treatment</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Lifestyle Advice:</h5>
          <ul>
            <li>Weight-bearing exercise</li>
            <li>Fall prevention strategies</li>
            <li>Quit smoking</li>
            <li>Limit alcohol</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0647\u0634\u0627\u0634\u0629 \u0627\u0644\u0639\u0638\u0627\u0645</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u0628\u0627\u064A\u0641\u0648\u0633\u0641\u0648\u0646\u064A\u062A:</b> \u0623\u0644\u064A\u0646\u062F\u0631\u0648\u0646\u0627\u062A 70 \u0645\u062C\u0645 \u0623\u0633\u0628\u0648\u0639\u064A\u064B\u0627</li>
            <li><b>\u0627\u0644\u0643\u0627\u0644\u0633\u064A\u0648\u0645:</b> 1000-1200 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627 \u0645\u0639 \u0641\u064A\u062A\u0627\u0645\u064A\u0646 \u062F</li>
            <li><b>\u0641\u064A\u062A\u0627\u0645\u064A\u0646 \u062F:</b> 800-2000 \u0648\u062D\u062F\u0629 \u062F\u0648\u0644\u064A\u0629 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u062E\u064A\u0627\u0631\u0627\u062A \u0623\u062E\u0631\u0649:</b> \u062F\u064A\u0646\u0648\u0633\u0648\u0645\u0627\u0628\u060C \u062A\u064A\u0631\u064A\u0628\u0627\u0631\u0627\u062A\u0627\u064A\u062F</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u062E\u0630 \u0627\u0644\u0628\u0627\u064A\u0641\u0648\u0633\u0641\u0648\u0646\u064A\u062A \u0639\u0644\u0649 \u0645\u0639\u062F\u0629 \u0641\u0627\u0631\u063A\u0629 \u0645\u0639 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u0627\u0628\u0642 \u0645\u0646\u062A\u0635\u0628\u064B\u0627 \u0644\u0645\u062F\u0629 30-60 \u062F\u0642\u064A\u0642\u0629 \u0628\u0639\u062F \u0627\u0644\u062C\u0631\u0639\u0629</li>
            <li>\u0641\u062D\u0635 \u0627\u0644\u0623\u0633\u0646\u0627\u0646 \u0642\u0628\u0644 \u0628\u062F\u0621 \u0627\u0644\u0639\u0644\u0627\u062C</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0646\u0635\u0627\u0626\u062D \u0644\u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629:</h5>
          <ul>
            <li>\u062A\u0645\u0627\u0631\u064A\u0646 \u062A\u062D\u0645\u0644 \u0627\u0644\u0648\u0632\u0646</li>
            <li>\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0645\u0646\u0639 \u0627\u0644\u0633\u0642\u0648\u0637</li>
            <li>\u0627\u0644\u0625\u0642\u0644\u0627\u0639 \u0639\u0646 \u0627\u0644\u062A\u062F\u062E\u064A\u0646</li>
            <li>\u0627\u0644\u062D\u062F \u0645\u0646 \u0627\u0644\u0643\u062D\u0648\u0644</li>
          </ul>
        </div>
      </div>`},"Gastritis , \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0629":{en:`<div class="condition-response">
        <h4>GASTRITIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>PPIs:</b> Omeprazole 20-40mg daily</li>
            <li><b>H2 blockers:</b> Famotidine 20-40mg twice daily</li>
            <li><b>Antacids:</b> For symptom relief</li>
            <li><b>Antibiotics:</b> For H. pylori infection</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Avoid NSAIDs and alcohol</li>
            <li>Watch for signs of bleeding</li>
            <li>Complete antibiotic course if prescribed</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Dietary Advice:</h5>
          <ul>
            <li>Eat smaller, more frequent meals</li>
            <li>Avoid spicy, acidic, fried foods</li>
            <li>Limit caffeine and carbonated drinks</li>
            <li>Manage stress</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0645\u0636\u062E\u0629 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0646:</b> \u0623\u0648\u0645\u064A\u0628\u0631\u0627\u0632\u0648\u0644 20-40 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u062D\u0627\u0635\u0631\u0627\u062A H2:</b> \u0641\u0627\u0645\u0648\u062A\u064A\u062F\u064A\u0646 20-40 \u0645\u062C\u0645 \u0645\u0631\u062A\u064A\u0646 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u0645\u0648\u0636\u0629:</b> \u0644\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0623\u0639\u0631\u0627\u0636</li>
            <li><b>\u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629:</b> \u0644\u0639\u062F\u0648\u0649 \u0627\u0644\u0645\u0644\u0648\u064A\u0629 \u0627\u0644\u0628\u0648\u0627\u0628\u064A\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u062A\u062C\u0646\u0628 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u0648\u0627\u0644\u0643\u062D\u0648\u0644</li>
            <li>\u0631\u0627\u0642\u0628 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0646\u0632\u064A\u0641</li>
            <li>\u0623\u0643\u0645\u0644 \u062F\u0648\u0631\u0629 \u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629 \u0625\u0630\u0627 \u0648\u0635\u0641\u0647\u0627 \u0627\u0644\u0637\u0628\u064A\u0628</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0646\u0635\u0627\u0626\u062D \u063A\u0630\u0627\u0626\u064A\u0629:</h5>
          <ul>
            <li>\u062A\u0646\u0627\u0648\u0644 \u0648\u062C\u0628\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u0645\u062A\u0643\u0631\u0631\u0629</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u0637\u0639\u0645\u0629 \u0627\u0644\u062D\u0627\u0631\u0629 \u0648\u0627\u0644\u062D\u0627\u0645\u0636\u0629 \u0648\u0627\u0644\u0645\u0642\u0644\u064A\u0629</li>
            <li>\u0642\u0644\u0644 \u0645\u0646 \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646 \u0648\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A \u0627\u0644\u063A\u0627\u0632\u064A\u0629</li>
            <li>\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u062A\u0648\u062A\u0631</li>
          </ul>
        </div>
      </div>`},"Hemorrhoids , \u0627\u0644\u0628\u0648\u0627\u0633\u064A\u0631":{en:`<div class="condition-response">
        <h4>HEMORRHOID TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Topical creams:</b> Hydrocortisone 1% or pramoxine</li>
            <li><b>Stool softeners:</b> Docusate sodium</li>
            <li><b>Oral pain relievers:</b> Acetaminophen (avoid NSAIDs)</li>
            <li><b>Sitz baths:</b> Warm water 10-15 minutes 2-3 times daily</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Don't use topical steroids >1 week</li>
            <li>Seek help for rectal bleeding</li>
            <li>Avoid straining during bowel movements</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Prevention:</h5>
          <ul>
            <li>High fiber diet (25-30g daily)</li>
            <li>Stay hydrated</li>
            <li>Regular exercise</li>
            <li>Don't delay bowel movements</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0628\u0648\u0627\u0633\u064A\u0631</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0643\u0631\u064A\u0645\u0627\u062A \u0645\u0648\u0636\u0639\u064A\u0629:</b> \u0647\u064A\u062F\u0631\u0648\u0643\u0648\u0631\u062A\u064A\u0632\u0648\u0646 1% \u0623\u0648 \u0628\u0631\u0627\u0645\u0648\u0643\u0633\u064A\u0646</li>
            <li><b>\u0645\u0644\u064A\u0646\u0627\u062A \u0627\u0644\u0628\u0631\u0627\u0632:</b> \u062F\u0648\u0643\u0648\u0633\u0627\u062A \u0627\u0644\u0635\u0648\u062F\u064A\u0648\u0645</li>
            <li><b>\u0645\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0641\u0645\u0648\u064A\u0629:</b> \u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644 (\u062A\u062C\u0646\u0628 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628)</li>
            <li><b>\u062D\u0645\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0642\u0639\u062F\u0629:</b> \u0645\u0627\u0621 \u062F\u0627\u0641\u0626 10-15 \u062F\u0642\u064A\u0642\u0629 2-3 \u0645\u0631\u0627\u062A \u064A\u0648\u0645\u064A\u064B\u0627</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0636\u0639\u064A\u0629 \u0644\u0623\u0643\u062B\u0631 \u0645\u0646 \u0623\u0633\u0628\u0648\u0639</li>
            <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0644\u0644\u0646\u0632\u064A\u0641 \u0627\u0644\u0634\u0631\u062C\u064A</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0625\u062C\u0647\u0627\u062F \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0632</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li>\u0646\u0638\u0627\u0645 \u063A\u0630\u0627\u0626\u064A \u063A\u0646\u064A \u0628\u0627\u0644\u0623\u0644\u064A\u0627\u0641 (25-30 \u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627)</li>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u0645\u0645\u0627\u0631\u0633\u0629 \u0627\u0644\u0631\u064A\u0627\u0636\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
            <li>\u0644\u0627 \u062A\u0624\u062C\u0644 \u0627\u0644\u062A\u0628\u0631\u0632</li>
          </ul>
        </div>
      </div>`},"Tinnitus , \u0637\u0646\u064A\u0646 \u0627\u0644\u0623\u0630\u0646":{en:`<div class="condition-response">
        <h4>TINNITUS MANAGEMENT</h4>
        <div class="medications">
          <h5>Possible Treatments:</h5>
          <ul>
            <li><b>Hearing aids:</b> If hearing loss present</li>
            <li><b>Sound therapy:</b> White noise machines</li>
            <li><b>Cognitive behavioral therapy:</b> For distress</li>
            <li><b>Medications:</b> Sometimes antidepressants or anxiolytics</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Avoid ototoxic medications if possible</li>
            <li>Protect ears from loud noise</li>
            <li>Rule out serious underlying causes</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Background noise/music</li>
            <li>Stress reduction techniques</li>
            <li>Limit caffeine and alcohol</li>
            <li>Support groups</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0625\u062F\u0627\u0631\u0629 \u0637\u0646\u064A\u0646 \u0627\u0644\u0623\u0630\u0646</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0645\u0645\u0643\u0646\u0629:</h5>
          <ul>
            <li><b>\u0633\u0645\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u0630\u0646:</b> \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u0641\u0642\u062F\u0627\u0646 \u0633\u0645\u0639</li>
            <li><b>\u0627\u0644\u0639\u0644\u0627\u062C \u0628\u0627\u0644\u0635\u0648\u062A:</b> \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0636\u0648\u0636\u0627\u0621 \u0627\u0644\u0628\u064A\u0636\u0627\u0621</li>
            <li><b>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0633\u0644\u0648\u0643\u064A \u0627\u0644\u0645\u0639\u0631\u0641\u064A:</b> \u0644\u0644\u0636\u064A\u0642 \u0627\u0644\u0646\u0641\u0633\u064A</li>
            <li><b>\u0627\u0644\u0623\u062F\u0648\u064A\u0629:</b> \u0623\u062D\u064A\u0627\u0646\u064B\u0627 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0643\u062A\u0626\u0627\u0628 \u0623\u0648 \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0642\u0644\u0642</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0633\u0627\u0645\u0629 \u0644\u0644\u0623\u0630\u0646 \u0625\u0630\u0627 \u0623\u0645\u0643\u0646</li>
            <li>\u0627\u062D\u0645\u064A \u0623\u0630\u0646\u064A\u0643 \u0645\u0646 \u0627\u0644\u0636\u0648\u0636\u0627\u0621 \u0627\u0644\u0639\u0627\u0644\u064A\u0629</li>
            <li>\u0627\u0633\u062A\u0628\u0639\u062F \u0627\u0644\u0623\u0633\u0628\u0627\u0628 \u0627\u0644\u0643\u0627\u0645\u0646\u0629 \u0627\u0644\u062E\u0637\u064A\u0631\u0629</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0636\u0648\u0636\u0627\u0621/\u0645\u0648\u0633\u064A\u0642\u0649 \u062E\u0644\u0641\u064A\u0629</li>
            <li>\u062A\u0642\u0646\u064A\u0627\u062A \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062A\u0648\u062A\u0631</li>
            <li>\u0642\u0644\u0644 \u0645\u0646 \u0627\u0644\u0643\u0627\u0641\u064A\u064A\u0646 \u0648\u0627\u0644\u0643\u062D\u0648\u0644</li>
            <li>\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u062F\u0639\u0645</li>
          </ul>
        </div>
      </div>`},"Vertigo , \u062F\u0648\u0627\u0631, dizziness":{en:`<div class="condition-response">
        <h4>VERTIGO TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Antihistamines:</b> Meclizine 25mg every 6 hours</li>
            <li><b>Anti-nausea:</b> Promethazine or ondansetron</li>
            <li><b>Benzodiazepines:</b> Short-term for severe cases</li>
            <li><b>Epley maneuver:</b> For BPPV</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Medications may cause drowsiness</li>
            <li>Don't drive while dizzy</li>
            <li>Rule out stroke in acute onset</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Move slowly, especially head movements</li>
            <li>Stay hydrated</li>
            <li>Sleep with head slightly elevated</li>
            <li>Vestibular rehabilitation exercises</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062F\u0648\u0627\u0631</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0645\u064A\u0643\u0644\u064A\u0632\u064A\u0646 25 \u0645\u062C\u0645 \u0643\u0644 6 \u0633\u0627\u0639\u0627\u062A</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0642\u064A\u0621:</b> \u0628\u0631\u0648\u0645\u064A\u062B\u0627\u0632\u064A\u0646 \u0623\u0648 \u0623\u0648\u0646\u062F\u0627\u0646\u0633\u064A\u062A\u0631\u0648\u0646</li>
            <li><b>\u0627\u0644\u0628\u0646\u0632\u0648\u062F\u064A\u0627\u0632\u064A\u0628\u064A\u0646\u0627\u062A:</b> \u0642\u0635\u064A\u0631\u0629 \u0627\u0644\u0645\u062F\u0649 \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0634\u062F\u064A\u062F\u0629</li>
            <li><b>\u0645\u0646\u0627\u0648\u0631\u0629 \u0625\u0628\u0644\u064A:</b> \u0644\u0644\u062F\u0648\u0627\u0631 \u0627\u0644\u0648\u0636\u0639\u064A \u0627\u0644\u062D\u0645\u064A\u062F</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0642\u062F \u062A\u0633\u0628\u0628 \u0627\u0644\u0646\u0639\u0627\u0633</li>
            <li>\u0644\u0627 \u062A\u0642\u0648\u062F \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062F\u0648\u062E\u0629</li>
            <li>\u0627\u0633\u062A\u0628\u0639\u062F \u0627\u0644\u0633\u0643\u062A\u0629 \u0627\u0644\u062F\u0645\u0627\u063A\u064A\u0629 \u0641\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u062D\u0627\u062F\u0629</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u062A\u062D\u0631\u0643 \u0628\u0628\u0637\u0621\u060C \u062E\u0627\u0635\u0629 \u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0631\u0623\u0633</li>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u0646\u0645 \u0648\u0631\u0623\u0633\u0643 \u0645\u0631\u062A\u0641\u0639 \u0642\u0644\u064A\u0644\u0627\u064B</li>
            <li>\u062A\u0645\u0627\u0631\u064A\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0623\u0647\u064A\u0644 \u062F\u0647\u0644\u064A\u0632\u064A</li>
          </ul>
        </div>
      </div>`},"Psoriasis , \u0627\u0644\u0635\u062F\u0641\u064A\u0629":{en:`<div class="condition-response">
        <h4>PSORIASIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Topical steroids:</b> For mild cases</li>
            <li><b>Vitamin D analogs:</b> Calcipotriene</li>
            <li><b>Phototherapy:</b> UVB or PUVA</li>
            <li><b>Systemic medications:</b> Methotrexate, cyclosporine</li>
            <li><b>Biologics:</b> For moderate-severe cases</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Don't overuse topical steroids</li>
            <li>Regular skin checks needed</li>
            <li>Monitor for psoriatic arthritis</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Moisturize skin regularly</li>
            <li>Limit alcohol</li>
            <li>Manage stress</li>
            <li>Quit smoking</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0635\u062F\u0641\u064A\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0636\u0639\u064A\u0629:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062E\u0641\u064A\u0641\u0629</li>
            <li><b>\u0646\u0638\u0627\u0626\u0631 \u0641\u064A\u062A\u0627\u0645\u064A\u0646 \u062F:</b> \u0643\u0627\u0644\u0633\u064A\u0628\u0648\u062A\u0631\u064A\u064A\u0646</li>
            <li><b>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0636\u0648\u0626\u064A:</b> UVB \u0623\u0648 PUVA</li>
            <li><b>\u0623\u062F\u0648\u064A\u0629 \u062C\u0647\u0627\u0632\u064A\u0629:</b> \u0645\u064A\u062B\u0648\u062A\u0631\u064A\u0643\u0633\u0627\u062A\u060C \u0633\u064A\u0643\u0644\u0648\u0633\u0628\u0648\u0631\u064A\u0646</li>
            <li><b>\u0627\u0644\u0628\u064A\u0648\u0644\u0648\u062C\u064A\u0629:</b> \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0633\u0637\u0629-\u0627\u0644\u0634\u062F\u064A\u062F\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0641\u0631\u0637 \u0641\u064A \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u0636\u0639\u064A\u0629</li>
            <li>\u0645\u0637\u0644\u0648\u0628 \u0641\u062D\u0648\u0635\u0627\u062A \u062C\u0644\u062F\u064A\u0629 \u0645\u0646\u062A\u0638\u0645\u0629</li>
            <li>\u0631\u0627\u0642\u0628 \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0641\u0627\u0635\u0644 \u0627\u0644\u0635\u062F\u0641\u064A</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0631\u0637\u0628 \u0628\u0634\u0631\u062A\u0643 \u0628\u0627\u0646\u062A\u0638\u0627\u0645</li>
            <li>\u0642\u0644\u0644 \u0645\u0646 \u0627\u0644\u0643\u062D\u0648\u0644</li>
            <li>\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u062A\u0648\u062A\u0631</li>
            <li>\u0627\u0644\u0625\u0642\u0644\u0627\u0639 \u0639\u0646 \u0627\u0644\u062A\u062F\u062E\u064A\u0646</li>
          </ul>
        </div>
      </div>`},"Shingles , \u0627\u0644\u0647\u0631\u0628\u0633 \u0627\u0644\u0646\u0637\u0627\u0642\u064A":{en:`<div class="condition-response">
        <h4>SHINGLES TREATMENT</h4>
        <div class="medications">
          <h5>Common Medications:</h5>
          <ul>
            <li><b>Antivirals:</b> Acyclovir, valacyclovir (start within 72 hours)</li>
            <li><b>Pain control:</b> NSAIDs, gabapentin, or opioids if severe</li>
            <li><b>Topical treatments:</b> Calamine lotion, capsaicin cream</li>
            <li><b>Vaccine:</b> Shingrix for prevention</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Antivirals most effective when started early</li>
            <li>Watch for secondary infection</li>
            <li>May develop postherpetic neuralgia</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Keep rash clean and dry</li>
            <li>Cool compresses for pain</li>
            <li>Loose clothing</li>
            <li>Don't scratch blisters</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0647\u0631\u0628\u0633 \u0627\u0644\u0646\u0637\u0627\u0642\u064A</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0641\u064A\u0631\u0648\u0633\u0627\u062A:</b> \u0623\u0633\u064A\u0643\u0644\u0648\u0641\u064A\u0631\u060C \u0641\u0627\u0644\u0627\u0633\u064A\u0643\u0644\u0648\u0641\u064A\u0631 (\u0627\u0628\u062F\u0623 \u062E\u0644\u0627\u0644 72 \u0633\u0627\u0639\u0629)</li>
            <li><b>\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0627\u0644\u0623\u0644\u0645:</b> \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628\u060C \u062C\u0627\u0628\u0627\u0628\u0646\u062A\u064A\u0646\u060C \u0623\u0648 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u0623\u0641\u064A\u0648\u0646\u064A\u0629 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0634\u062F\u064A\u062F\u064B\u0627</li>
            <li><b>\u0639\u0644\u0627\u062C\u0627\u062A \u0645\u0648\u0636\u0639\u064A\u0629:</b> \u0643\u0627\u0644\u0627\u0645\u064A\u0646 \u0644\u0648\u0634\u0646\u060C \u0643\u0631\u064A\u0645 \u0643\u0628\u0633\u0627\u064A\u0633\u064A\u0646</li>
            <li><b>\u0627\u0644\u0644\u0642\u0627\u062D:</b> \u0634\u064A\u0646\u062C\u0631\u064A\u0643\u0633 \u0644\u0644\u0648\u0642\u0627\u064A\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0641\u064A\u0631\u0648\u0633\u0627\u062A \u0623\u0643\u062B\u0631 \u0641\u0639\u0627\u0644\u064A\u0629 \u0639\u0646\u062F \u0627\u0644\u0628\u062F\u0621 \u0645\u0628\u0643\u0631\u064B\u0627</li>
            <li>\u0631\u0627\u0642\u0628 \u0627\u0644\u0639\u062F\u0648\u0649 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629</li>
            <li>\u0642\u062F \u064A\u062A\u0637\u0648\u0631 \u0625\u0644\u0649 \u0623\u0644\u0645 \u0639\u0635\u0628\u064A \u062A\u0627\u0644 \u0644\u0644\u0647\u0631\u0628\u0633</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0637\u0641\u062D \u0646\u0638\u064A\u0641\u064B\u0627 \u0648\u062C\u0627\u0641\u064B\u0627</li>
            <li>\u0643\u0645\u0627\u062F\u0627\u062A \u0628\u0627\u0631\u062F\u0629 \u0644\u0644\u0623\u0644\u0645</li>
            <li>\u0645\u0644\u0627\u0628\u0633 \u0641\u0636\u0641\u0627\u0636\u0629</li>
            <li>\u0644\u0627 \u062A\u062E\u062F\u0634 \u0627\u0644\u0628\u062B\u0648\u0631</li>
          </ul>
        </div>
      </div>`},"Gout , \u0627\u0644\u0646\u0642\u0631\u0633":{en:`<div class="condition-response">
        <h4>GOUT TREATMENT</h4>
        <div class="medications">
          <h5>Acute Attack Treatment:</h5>
          <ul>
            <li><b>NSAIDs:</b> Indomethacin or naproxen</li>
            <li><b>Colchicine:</b> 1.2mg initially, then 0.6mg 1 hour later</li>
            <li><b>Steroids:</b> Prednisone if NSAIDs contraindicated</li>
          </ul>
          <h5>Preventive Treatment:</h5>
          <ul>
            <li><b>Allopurinol:</b> Start at 100mg daily</li>
            <li><b>Febuxostat:</b> Alternative to allopurinol</li>
            <li><b>Probenecid:</b> For underexcretors</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Avoid alcohol during attacks</li>
            <li>Don't start allopurinol during acute attack</li>
            <li>Stay hydrated</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Dietary Advice:</h5>
          <ul>
            <li>Limit red meat and seafood</li>
            <li>Avoid high-fructose corn syrup</li>
            <li>Low-fat dairy may be protective</li>
            <li>Cherries may help lower uric acid</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0646\u0642\u0631\u0633</h4>
        <div class="medications">
          <h5>\u0639\u0644\u0627\u062C \u0627\u0644\u0646\u0648\u0628\u0629 \u0627\u0644\u062D\u0627\u062F\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628:</b> \u0625\u0646\u062F\u0648\u0645\u064A\u062B\u0627\u0633\u064A\u0646 \u0623\u0648 \u0646\u0627\u0628\u0631\u0648\u0643\u0633\u064A\u0646</li>
            <li><b>\u0643\u0648\u0644\u0634\u064A\u0633\u064A\u0646:</b> 1.2 \u0645\u062C\u0645 \u0623\u0648\u0644\u0627\u064B\u060C \u062B\u0645 0.6 \u0645\u062C\u0645 \u0628\u0639\u062F \u0633\u0627\u0639\u0629</li>
            <li><b>\u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A:</b> \u0628\u0631\u064A\u062F\u0646\u064A\u0632\u0648\u0646 \u0625\u0630\u0627 \u0643\u0627\u0646\u062A \u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u0645\u0645\u0646\u0648\u0639\u0629</li>
          </ul>
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0648\u0642\u0627\u0626\u064A:</h5>
          <ul>
            <li><b>\u0623\u0644\u0648\u0628\u064A\u0648\u0631\u064A\u0646\u0648\u0644:</b> \u0627\u0628\u062F\u0623 \u0628\u0640 100 \u0645\u062C\u0645 \u064A\u0648\u0645\u064A\u064B\u0627</li>
            <li><b>\u0641\u064A\u0628\u0648\u0643\u0633\u0648\u0633\u062A\u0627\u062A:</b> \u0628\u062F\u064A\u0644 \u0644\u0623\u0644\u0648\u0628\u064A\u0648\u0631\u064A\u0646\u0648\u0644</li>
            <li><b>\u0628\u0631\u0648\u0628\u064A\u0646\u0633\u064A\u062F:</b> \u0644\u0645\u0646 \u064A\u0639\u0627\u0646\u0648\u0646 \u0645\u0646 \u0646\u0642\u0635 \u0625\u0641\u0631\u0627\u0632</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0643\u062D\u0648\u0644 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0646\u0648\u0628\u0627\u062A</li>
            <li>\u0644\u0627 \u062A\u0628\u062F\u0623 \u0623\u0644\u0648\u0628\u064A\u0648\u0631\u064A\u0646\u0648\u0644 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0646\u0648\u0628\u0629 \u0627\u0644\u062D\u0627\u062F\u0629</li>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0646\u0635\u0627\u0626\u062D \u063A\u0630\u0627\u0626\u064A\u0629:</h5>
          <ul>
            <li>\u0642\u0644\u0644 \u0645\u0646 \u0627\u0644\u0644\u062D\u0648\u0645 \u0627\u0644\u062D\u0645\u0631\u0627\u0621 \u0648\u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u0628\u062D\u0631\u064A\u0629</li>
            <li>\u062A\u062C\u0646\u0628 \u0634\u0631\u0627\u0628 \u0627\u0644\u0630\u0631\u0629 \u0639\u0627\u0644\u064A \u0627\u0644\u0641\u0631\u0643\u062A\u0648\u0632</li>
            <li>\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0623\u0644\u0628\u0627\u0646 \u0642\u0644\u064A\u0644\u0629 \u0627\u0644\u062F\u0633\u0645 \u0642\u062F \u062A\u0643\u0648\u0646 \u0648\u0642\u0627\u0626\u064A\u0629</li>
            <li>\u0627\u0644\u0643\u0631\u0632 \u0642\u062F \u064A\u0633\u0627\u0639\u062F \u0641\u064A \u062E\u0641\u0636 \u062D\u0645\u0636 \u0627\u0644\u064A\u0648\u0631\u064A\u0643</li>
          </ul>
        </div>
      </div>`},"Bronchitis , \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629":{en:`<div class="condition-response">
        <h4>BRONCHITIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Cough suppressants:</b> Dextromethorphan for dry cough</li>
            <li><b>Expectorants:</b> Guaifenesin for productive cough</li>
            <li><b>Bronchodilators:</b> For wheezing (albuterol inhaler)</li>
            <li><b>Pain relievers:</b> Acetaminophen or ibuprofen</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Antibiotics usually not helpful (viral cause)</li>
            <li>Seek care if symptoms worsen or last >3 weeks</li>
            <li>Smokers at higher risk for complications</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Stay hydrated</li>
            <li>Use humidifier</li>
            <li>Rest</li>
            <li>Avoid irritants (smoke, pollution)</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u062B\u0628\u0637\u0627\u062A \u0627\u0644\u0633\u0639\u0627\u0644:</b> \u062F\u064A\u0643\u0633\u062A\u0631\u0648\u0645\u064A\u062B\u0648\u0631\u0641\u0627\u0646 \u0644\u0644\u0633\u0639\u0627\u0644 \u0627\u0644\u062C\u0627\u0641</li>
            <li><b>\u0645\u0630\u064A\u0628\u0627\u062A \u0627\u0644\u0628\u0644\u063A\u0645:</b> \u062C\u0648\u0627\u064A\u0641\u064A\u0646\u064A\u0633\u064A\u0646 \u0644\u0644\u0633\u0639\u0627\u0644 \u0627\u0644\u0645\u0646\u062A\u062C</li>
            <li><b>\u0645\u0648\u0633\u0639\u0627\u062A \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629:</b> \u0644\u0644\u0635\u0641\u064A\u0631 (\u0628\u062E\u0627\u062E \u0623\u0644\u0628\u0648\u062A\u064A\u0631\u0648\u0644)</li>
            <li><b>\u0645\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0623\u0644\u0645:</b> \u0628\u0627\u0631\u0627\u0633\u064A\u062A\u0627\u0645\u0648\u0644 \u0623\u0648 \u0627\u064A\u0628\u0648\u0628\u0631\u0648\u0641\u064A\u0646</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629 \u0639\u0627\u062F\u0629 \u063A\u064A\u0631 \u0645\u0641\u064A\u062F\u0629 (\u0633\u0628\u0628 \u0641\u064A\u0631\u0648\u0633\u064A)</li>
            <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0631\u0639\u0627\u064A\u0629 \u0625\u0630\u0627 \u0633\u0627\u0621\u062A \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0623\u0648 \u0627\u0633\u062A\u0645\u0631\u062A >3 \u0623\u0633\u0627\u0628\u064A\u0639</li>
            <li>\u0627\u0644\u0645\u062F\u062E\u0646\u0648\u0646 \u0623\u0643\u062B\u0631 \u0639\u0631\u0636\u0629 \u0644\u0644\u0645\u0636\u0627\u0639\u0641\u0627\u062A</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0631\u0637\u0628 \u0627\u0644\u0647\u0648\u0627\u0621</li>
            <li>\u0627\u0633\u062A\u0631\u062D</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0647\u064A\u062C\u0627\u062A (\u0627\u0644\u062F\u062E\u0627\u0646\u060C \u0627\u0644\u062A\u0644\u0648\u062B)</li>
          </ul>
        </div>
      </div>`},"Pink Eye , \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629, conjunctivitis":{en:`<div class="condition-response">
        <h4>PINK EYE (CONJUNCTIVITIS) TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Bacterial:</b> Antibiotic drops (erythromycin, ciprofloxacin)</li>
            <li><b>Viral:</b> Artificial tears, cold compresses</li>
            <li><b>Allergic:</b> Antihistamine drops (ketotifen)</li>
            <li><b>Artificial tears:</b> For comfort</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Don't share towels/pillows</li>
            <li>Don't wear contacts until resolved</li>
            <li>Seek care for vision changes/severe pain</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Wash hands frequently</li>
            <li>Clean eyelids with warm water</li>
            <li>Discard eye makeup after infection</li>
            <li>Don't rub eyes</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0639\u064A\u0646 \u0627\u0644\u0648\u0631\u062F\u064A\u0629 (\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0645\u0644\u062A\u062D\u0645\u0629)</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u0628\u0643\u062A\u064A\u0631\u064A:</b> \u0642\u0637\u0631\u0627\u062A \u0645\u0636\u0627\u062F \u062D\u064A\u0648\u064A (\u0625\u0631\u064A\u062B\u0631\u0648\u0645\u064A\u0633\u064A\u0646\u060C \u0633\u064A\u0628\u0631\u0648\u0641\u0644\u0648\u0643\u0633\u0627\u0633\u064A\u0646)</li>
            <li><b>\u0627\u0644\u0641\u064A\u0631\u0648\u0633\u064A:</b> \u062F\u0645\u0648\u0639 \u0627\u0635\u0637\u0646\u0627\u0639\u064A\u0629\u060C \u0643\u0645\u0627\u062F\u0627\u062A \u0628\u0627\u0631\u062F\u0629</li>
            <li><b>\u0627\u0644\u062A\u062D\u0633\u0633\u064A:</b> \u0642\u0637\u0631\u0627\u062A \u0645\u0636\u0627\u062F \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646 (\u0643\u064A\u062A\u0648\u062A\u064A\u0641\u064A\u0646)</li>
            <li><b>\u0627\u0644\u062F\u0645\u0648\u0639 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u0629:</b> \u0644\u0644\u0631\u0627\u062D\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0646\u0627\u0634\u0641/\u0627\u0644\u0648\u0633\u0627\u0626\u062F</li>
            <li>\u0644\u0627 \u062A\u0631\u062A\u062F\u064A \u0627\u0644\u0639\u062F\u0633\u0627\u062A \u062D\u062A\u0649 \u0627\u0644\u0634\u0641\u0627\u0621</li>
            <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0631\u0639\u0627\u064A\u0629 \u0644\u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0631\u0624\u064A\u0629/\u0623\u0644\u0645 \u0634\u062F\u064A\u062F</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u063A\u0633\u0644 \u064A\u062F\u064A\u0643 frequently</li>
            <li>\u0646\u0638\u0641 \u0627\u0644\u062C\u0641\u0648\u0646 \u0628\u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u062F\u0627\u0641\u0626</li>
            <li>\u062A\u062E\u0644\u0635 \u0645\u0646 \u0645\u0643\u064A\u0627\u062C \u0627\u0644\u0639\u064A\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u0639\u062F\u0648\u0649</li>
            <li>\u0644\u0627 \u062A\u0641\u0631\u0643 \u0639\u064A\u0646\u064A\u0643</li>
          </ul>
        </div>
      </div>`},"Sinusitis , \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u062C\u064A\u0648\u0628 \u0627\u0644\u0623\u0646\u0641\u064A\u0629":{en:`<div class="condition-response">
        <h4>SINUSITIS TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Nasal saline irrigation:</b> Neti pot or spray</li>
            <li><b>Nasal steroids:</b> Fluticasone nasal spray</li>
            <li><b>Decongestants:</b> Pseudoephedrine (short-term)</li>
            <li><b>Antibiotics:</b> Only for bacterial sinusitis</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warnings:</h5>
          <ul>
            <li>Don't use decongestant sprays >3 days</li>
            <li>Seek care for severe headache/fever</li>
            <li>Complete antibiotic course if prescribed</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Self-Care:</h5>
          <ul>
            <li>Stay hydrated</li>
            <li>Use humidifier</li>
            <li>Warm compresses for pain</li>
            <li>Elevate head while sleeping</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u062C\u064A\u0648\u0628 \u0627\u0644\u0623\u0646\u0641\u064A\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u063A\u0633\u064A\u0644 \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0645\u0627\u0644\u062D:</b> \u0648\u0639\u0627\u0621 \u0646\u064A\u062A\u064A \u0623\u0648 \u0628\u062E\u0627\u062E</li>
            <li><b>\u0628\u062E\u0627\u062E\u0627\u062A \u0627\u0644\u0623\u0646\u0641 \u0627\u0644\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u064A\u0629:</b> \u0641\u0644\u0648\u062A\u064A\u0643\u0627\u0632\u0648\u0646</li>
            <li><b>\u0645\u0632\u064A\u0644\u0627\u062A \u0627\u0644\u0627\u062D\u062A\u0642\u0627\u0646:</b> \u0633\u0648\u062F\u0648\u0625\u064A\u0641\u064A\u062F\u0631\u064A\u0646 (\u0642\u0635\u064A\u0631 \u0627\u0644\u0645\u062F\u0649)</li>
            <li><b>\u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629:</b> \u0641\u0642\u0637 \u0644\u0644\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0628\u0643\u062A\u064A\u0631\u064A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u062A\u062D\u0630\u064A\u0631\u0627\u062A:</h5>
          <ul>
            <li>\u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 \u0628\u062E\u0627\u062E\u0627\u062A \u0645\u0632\u064A\u0644\u0629 \u0644\u0644\u0627\u062D\u062A\u0642\u0627\u0646 \u0644\u0623\u0643\u062B\u0631 \u0645\u0646 3 \u0623\u064A\u0627\u0645</li>
            <li>\u0627\u0637\u0644\u0628 \u0627\u0644\u0631\u0639\u0627\u064A\u0629 \u0644\u0644\u0635\u062F\u0627\u0639 \u0627\u0644\u0634\u062F\u064A\u062F/\u0627\u0644\u062D\u0645\u0649</li>
            <li>\u0623\u0643\u0645\u0644 \u062F\u0648\u0631\u0629 \u0627\u0644\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u064A\u0648\u064A\u0629 \u0625\u0630\u0627 \u0648\u0635\u0641\u0647\u0627 \u0627\u0644\u0637\u0628\u064A\u0628</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0634\u0631\u0628 \u0643\u0645\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621</li>
            <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0631\u0637\u0628 \u0627\u0644\u0647\u0648\u0627\u0621</li>
            <li>\u0643\u0645\u0627\u062F\u0627\u062A \u062F\u0627\u0641\u0626\u0629 \u0644\u0644\u0623\u0644\u0645</li>
            <li>\u0627\u0631\u0641\u0639 \u0631\u0623\u0633\u0643 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0646\u0648\u0645</li>
          </ul>
        </div>
      </div>`},"Allergic Reactions , \u0627\u0644\u062D\u0633\u0627\u0633\u064A\u0629":{en:`<div class="condition-response">
        <h4>ALLERGIC REACTION TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Antihistamines:</b> Diphenhydramine 25-50mg, Loratadine 10mg</li>
            <li><b>Epinephrine auto-injector:</b> For anaphylaxis (0.3mg IM)</li>
            <li><b>Corticosteroids:</b> Prednisone for severe reactions</li>
            <li><b>Bronchodilators:</b> Albuterol for respiratory symptoms</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Emergency Signs:</h5>
          <ul>
            <li>Difficulty breathing/swallowing</li>
            <li>Swelling of face/tongue</li>
            <li>Dizziness or fainting</li>
            <li>Use epinephrine and call emergency</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Prevention:</h5>
          <ul>
            <li>Identify and avoid triggers</li>
            <li>Carry emergency medications</li>
            <li>Wear medical alert bracelet</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u062D\u0633\u0627\u0633\u064A\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u062F\u0627\u064A\u0641\u064A\u0646\u0647\u0627\u064A\u062F\u0631\u0627\u0645\u064A\u0646 25-50 \u0645\u062C\u0645\u060C \u0644\u0648\u0631\u0627\u062A\u0627\u062F\u064A\u0646 10 \u0645\u062C\u0645</li>
            <li><b>\u0627\u0644\u062D\u0642\u0646 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u0644\u0644\u0625\u0628\u064A\u0646\u0641\u0631\u064A\u0646:</b> \u0644\u0627\u0644\u062A\u0623\u0642 (0.3 \u0645\u062C\u0645 \u0639\u0636\u0644\u064A)</li>
            <li><b>\u0627\u0644\u0643\u0648\u0631\u062A\u064A\u0643\u0648\u0633\u062A\u064A\u0631\u0648\u064A\u062F\u0627\u062A:</b> \u0628\u0631\u064A\u062F\u0646\u064A\u0632\u0648\u0646 \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0634\u062F\u064A\u062F\u0629</li>
            <li><b>\u0645\u0648\u0633\u0639\u0627\u062A \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0647\u0648\u0627\u0626\u064A\u0629:</b> \u0623\u0644\u0628\u0648\u062A\u064A\u0631\u0648\u0644 \u0644\u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u0646\u0641\u0633\u064A</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0637\u0648\u0627\u0631\u0626:</h5>
          <ul>
            <li>\u0635\u0639\u0648\u0628\u0629 \u0641\u064A \u0627\u0644\u062A\u0646\u0641\u0633/\u0627\u0644\u0628\u0644\u0639</li>
            <li>\u062A\u0648\u0631\u0645 \u0627\u0644\u0648\u062C\u0647/\u0627\u0644\u0644\u0633\u0627\u0646</li>
            <li>\u062F\u0648\u0627\u0631 \u0623\u0648 \u0625\u063A\u0645\u0627\u0621</li>
            <li>\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0625\u0628\u064A\u0646\u0641\u0631\u064A\u0646 \u0648\u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0637\u0648\u0627\u0631\u0626</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li>\u062D\u062F\u062F \u0648\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u062D\u0641\u0632\u0627\u062A</li>
            <li>\u0627\u062D\u0645\u0644 \u0623\u062F\u0648\u064A\u0629 \u0627\u0644\u0637\u0648\u0627\u0631\u0626</li>
            <li>\u0627\u0631\u062A\u062F \u0633\u0648\u0627\u0631 \u062A\u0646\u0628\u064A\u0647 \u0637\u0628\u064A</li>
          </ul>
        </div>
      </div>`},"Obesity , Weight Issues ,\u0627\u0644\u0633\u0645\u0646\u0629":{en:`<div class="condition-response">
        <h4>WEIGHT MANAGEMENT</h4>
        <div class="medications">
          <h5>Medical Options:</h5>
          <ul>
            <li><b>GLP-1 agonists:</b> Semaglutide (Wegovy\xAE)</li>
            <li><b>Other medications:</b> Orlistat, Phentermine-Topiramate</li>
            <li><b>Bariatric surgery:</b> For BMI >40 or >35 with comorbidities</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Health Risks:</h5>
          <ul>
            <li>Diabetes, hypertension, heart disease</li>
            <li>Sleep apnea, joint problems</li>
            <li>Avoid crash diets</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Lifestyle Changes:</h5>
          <ul>
            <li>Calorie deficit (500-1000 kcal/day)</li>
            <li>150+ mins exercise weekly</li>
            <li>Behavioral therapy for eating habits</li>
            <li>High-protein, high-fiber diet</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0648\u0632\u0646</h4>
        <div class="medications">
          <h5>\u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0629:</h5>
          <ul>
            <li><b>\u0646\u0627\u0647\u0636\u0627\u062A GLP-1:</b> \u0633\u064A\u0645\u0627\u062C\u0644\u0648\u062A\u0627\u064A\u062F (\u0648\u064A\u062C\u0648\u0641\u064A)</li>
            <li><b>\u0623\u062F\u0648\u064A\u0629 \u0623\u062E\u0631\u0649:</b> \u0623\u0648\u0631\u0644\u064A\u0633\u062A\u0627\u062A\u060C \u0641\u064A\u0646\u062A\u0631\u0645\u064A\u0646-\u062A\u0648\u0628\u064A\u0631\u0627\u0645\u064A\u062A</li>
            <li><b>\u062C\u0631\u0627\u062D\u0629 \u0627\u0644\u0633\u0645\u0646\u0629:</b> \u0644\u0645\u0624\u0634\u0631 \u0643\u062A\u0644\u0629 \u0627\u0644\u062C\u0633\u0645 >40 \u0623\u0648 >35 \u0645\u0639 \u0623\u0645\u0631\u0627\u0636 \u0645\u0635\u0627\u062D\u0628\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u0635\u062D\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0644\u0633\u0643\u0631\u064A\u060C \u0627\u0631\u062A\u0641\u0627\u0639 \u0627\u0644\u0636\u063A\u0637\u060C \u0623\u0645\u0631\u0627\u0636 \u0627\u0644\u0642\u0644\u0628</li>
            <li>\u0627\u0646\u0642\u0637\u0627\u0639 \u0627\u0644\u0646\u0641\u0633 \u0627\u0644\u0646\u0648\u0645\u064A\u060C \u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0645\u0641\u0627\u0635\u0644</li>
            <li>\u062A\u062C\u0646\u0628 \u0627\u0644\u062D\u0645\u064A\u0627\u062A \u0627\u0644\u0642\u0627\u0633\u064A\u0629</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629:</h5>
          <ul>
            <li>\u0639\u062C\u0632 \u062D\u0631\u0627\u0631\u064A (500-1000 \u0633\u0639\u0631\u0629/\u064A\u0648\u0645)</li>
            <li>150+ \u062F\u0642\u064A\u0642\u0629 \u062A\u0645\u0627\u0631\u064A\u0646 \u0623\u0633\u0628\u0648\u0639\u064A\u064B\u0627</li>
            <li>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u0633\u0644\u0648\u0643\u064A \u0644\u0639\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0643\u0644</li>
            <li>\u0646\u0638\u0627\u0645 \u0639\u0627\u0644\u064A \u0627\u0644\u0628\u0631\u0648\u062A\u064A\u0646 \u0648\u0627\u0644\u0623\u0644\u064A\u0627\u0641</li>
          </ul>
        </div>
      </div>`},"Skin Infections , \u0639\u062F\u0648\u0649 \u062C\u0644\u062F\u064A\u0629":{en:`<div class="condition-response">
        <h4>SKIN INFECTION TREATMENT</h4>
        <div class="medications">
          <h5>Common Treatments:</h5>
          <ul>
            <li><b>Cellulitis:</b> Cephalexin 500mg QID, Dicloxacillin</li>
            <li><b>Impetigo:</b> Mupirocin ointment or oral antibiotics</li>
            <li><b>Fungal:</b> Clotrimazole cream, terbinafine</li>
            <li><b>MRSA:</b> Bactrim, Doxycycline, Clindamycin</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warning Signs:</h5>
          <ul>
            <li>Spreading redness, fever</li>
            <li>Pus or abscess formation</li>
            <li>Diabetic foot infections</li>
            <li>Complete full antibiotic course</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Prevention:</h5>
          <ul>
            <li>Proper wound care</li>
            <li>Hand hygiene</li>
            <li>Don't share personal items</li>
            <li>Moisturize dry skin</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0639\u0644\u0627\u062C \u0627\u0644\u0639\u062F\u0648\u0649 \u0627\u0644\u062C\u0644\u062F\u064A\u0629</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629:</h5>
          <ul>
            <li><b>\u0627\u0644\u062A\u0647\u0627\u0628 \u0627\u0644\u0646\u0633\u064A\u062C \u0627\u0644\u062E\u0644\u0648\u064A:</b> \u0633\u064A\u0641\u0627\u0644\u064A\u0643\u0633\u064A\u0646 500 \u0645\u062C\u0645 4 \u0645\u0631\u0627\u062A \u064A\u0648\u0645\u064A\u064B\u0627\u060C \u062F\u064A\u0643\u0644\u0648\u0643\u0633\u0627\u0633\u064A\u0644\u064A\u0646</li>
            <li><b>\u0627\u0644\u0642\u0648\u0628\u0627\u0621:</b> \u0645\u0631\u0647\u0645 \u0645\u0648\u0628\u064A\u0631\u0648\u0633\u064A\u0646 \u0623\u0648 \u0645\u0636\u0627\u062F\u0627\u062A \u062D\u064A\u0648\u064A\u0629 \u0641\u0645\u0648\u064A\u0629</li>
            <li><b>\u0627\u0644\u0641\u0637\u0631\u064A\u0627\u062A:</b> \u0643\u0631\u064A\u0645 \u0643\u0644\u0648\u062A\u0631\u064A\u0645\u0627\u0632\u0648\u0644\u060C \u062A\u064A\u0631\u0628\u064A\u0646\u0627\u0641\u064A\u0646</li>
            <li><b>MRSA:</b> \u0628\u0627\u0643\u062A\u0631\u064A\u0645\u060C \u062F\u0648\u0643\u0633\u064A\u0633\u064A\u0643\u0644\u064A\u0646\u060C \u0643\u0644\u064A\u0646\u062F\u0627\u0645\u0627\u064A\u0633\u064A\u0646</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631:</h5>
          <ul>
            <li>\u0627\u062D\u0645\u0631\u0627\u0631 \u0645\u0646\u062A\u0634\u0631\u060C \u062D\u0645\u0649</li>
            <li>\u062A\u0643\u0648\u0646 \u0635\u062F\u064A\u062F \u0623\u0648 \u062E\u0631\u0627\u062C</li>
            <li>\u0639\u062F\u0648\u0649 \u0642\u062F\u0645 \u0645\u0631\u064A\u0636 \u0627\u0644\u0633\u0643\u0631\u064A</li>
            <li>\u0623\u0643\u0645\u0644 \u062F\u0648\u0631\u0629 \u0627\u0644\u0645\u0636\u0627\u062F \u0627\u0644\u062D\u064A\u0648\u064A \u0643\u0627\u0645\u0644\u0629</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li>\u0627\u0644\u0639\u0646\u0627\u064A\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0628\u0627\u0644\u062C\u0631\u0648\u062D</li>
            <li>\u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u064A\u062F\u064A\u0646</li>
            <li>\u0644\u0627 \u062A\u0634\u0627\u0631\u0643 \u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</li>
            <li>\u0631\u0637\u0628 \u0627\u0644\u0628\u0634\u0631\u0629 \u0627\u0644\u062C\u0627\u0641\u0629</li>
          </ul>
        </div>
      </div>`},"Stroke , \u0627\u0644\u0633\u0643\u062A\u0629 \u0627\u0644\u062F\u0645\u0627\u063A\u064A\u0629":{en:`<div class="condition-response">
        <h4>STROKE/TIA MANAGEMENT</h4>
        <div class="medications">
          <h5>Acute Treatment:</h5>
          <ul>
            <li><b>tPA:</b> Within 4.5 hours of ischemic stroke</li>
            <li><b>Aspirin:</b> 325mg initially (after ruling out hemorrhage)</li>
            <li><b>Blood pressure control:</b> Labetalol, Nicardipine IV</li>
          </ul>
          <h5>Prevention:</h5>
          <ul>
            <li><b>Antiplatelets:</b> Aspirin, Clopidogrel</li>
            <li><b>Anticoagulants:</b> For AFib (Warfarin, DOACs)</li>
            <li><b>Statins:</b> High-intensity for secondary prevention</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>FAST Recognition:</h5>
          <ul>
            <li>Face drooping</li>
            <li>Arm weakness</li>
            <li>Speech difficulty</li>
            <li>Time to call emergency</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Risk Reduction:</h5>
          <ul>
            <li>Blood pressure control</li>
            <li>Smoking cessation</li>
            <li>Atrial fibrillation management</li>
            <li>Carotid endarterectomy if indicated</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062C\u0644\u0637\u0629/NMO</h4>
        <div class="medications">
          <h5>\u0627\u0644\u0639\u0644\u0627\u062C \u0627\u0644\u062D\u0627\u062F:</h5>
          <ul>
            <li><b>\u0645\u0646\u0634\u0637 \u0627\u0644\u0628\u0644\u0627\u0632\u0645\u064A\u0646\u0648\u062C\u064A\u0646 \u0627\u0644\u0646\u0633\u064A\u062C\u064A:</b> \u062E\u0644\u0627\u0644 4.5 \u0633\u0627\u0639\u0629 \u0645\u0646 \u0627\u0644\u062C\u0644\u0637\u0629</li>
            <li><b>\u0623\u0633\u0628\u0631\u064A\u0646:</b> 325 \u0645\u062C\u0645 \u0623\u0648\u0644\u064A\u0627\u064B (\u0628\u0639\u062F \u0627\u0633\u062A\u0628\u0639\u0627\u062F \u0627\u0644\u0646\u0632\u064A\u0641)</li>
            <li><b>\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0636\u063A\u0637 \u0627\u0644\u062F\u0645:</b> \u0644\u0627\u0628\u064A\u062A\u0627\u0644\u0648\u0644\u060C \u0646\u064A\u0643\u0627\u0631\u062F\u064A\u0628\u064A\u0646 \u0648\u0631\u064A\u062F\u064A</li>
          </ul>
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u0635\u0641\u0627\u0626\u062D:</b> \u0623\u0633\u0628\u0631\u064A\u0646\u060C \u0643\u0644\u0648\u0628\u064A\u062F\u0648\u062C\u0631\u064A\u0644</li>
            <li><b>\u0645\u0636\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u062E\u062B\u0631:</b> \u0644\u0644\u0631\u062C\u0641\u0627\u0646 \u0627\u0644\u0623\u0630\u064A\u0646\u064A (\u0648\u0627\u0631\u0641\u0627\u0631\u064A\u0646\u060C DOACs)</li>
            <li><b>\u0627\u0644\u0633\u062A\u0627\u062A\u064A\u0646\u0627\u062A:</b> \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0643\u062B\u0627\u0641\u0629 \u0644\u0644\u0648\u0642\u0627\u064A\u0629 \u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0633\u0631\u064A\u0639 (FAST):</h5>
          <ul>
            <li>\u062A\u062F\u0644\u064A \u0627\u0644\u0648\u062C\u0647</li>
            <li>\u0636\u0639\u0641 \u0627\u0644\u0630\u0631\u0627\u0639</li>
            <li>\u0635\u0639\u0648\u0628\u0629 \u0627\u0644\u0643\u0644\u0627\u0645</li>
            <li>\u062D\u0627\u0646 \u0648\u0642\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0637\u0648\u0627\u0631\u0626</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0627\u0637\u0631:</h5>
          <ul>
            <li>\u0627\u0644\u062A\u062D\u0643\u0645 \u0641\u064A \u0636\u063A\u0637 \u0627\u0644\u062F\u0645</li>
            <li>\u0627\u0644\u0625\u0642\u0644\u0627\u0639 \u0639\u0646 \u0627\u0644\u062A\u062F\u062E\u064A\u0646</li>
            <li>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u062C\u0641\u0627\u0646 \u0627\u0644\u0623\u0630\u064A\u0646\u064A</li>
            <li>\u0627\u0633\u062A\u0626\u0635\u0627\u0644 \u0628\u0627\u0637\u0646\u0629 \u0627\u0644\u0634\u0631\u064A\u0627\u0646 \u0627\u0644\u0633\u0628\u0627\u062A\u064A \u0625\u0630\u0627 \u0644\u0632\u0645 \u0627\u0644\u0623\u0645\u0631</li>
          </ul>
        </div>
      </div>`},"Eye Strain, \u0625\u062C\u0647\u0627\u062F \u0627\u0644\u0639\u064A\u0646":{en:`<div class="condition-response">
        <h4>EYE STRAIN RELIEF</h4>
        <div class="medications">
          <h5>Symptom Relief:</h5>
          <ul>
            <li><b>Artificial tears:</b> Preservative-free for dry eyes</li>
            <li><b>Antihistamine drops:</b> For allergy-related strain</li>
            <li><b>Blue light glasses:</b> May help with screen use</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>Warning Signs:</h5>
          <ul>
            <li>Persistent vision changes</li>
            <li>Severe eye pain</li>
            <li>Light sensitivity</li>
            <li>Rule out glaucoma/other conditions</li>
          </ul>
        </div>
        <div class="advice">
          <h5>Prevention:</h5>
          <ul>
            <li>20-20-20 rule: Every 20 mins, look 20 feet away for 20 sec</li>
            <li>Proper screen distance (arm's length)</li>
            <li>Adjust lighting to reduce glare</li>
            <li>Blink frequently</li>
          </ul>
        </div>
      </div>`,ar:`<div class="condition-response">
        <h4>\u062A\u062E\u0641\u064A\u0641 \u0625\u062C\u0647\u0627\u062F \u0627\u0644\u0639\u064A\u0646</h4>
        <div class="medications">
          <h5>\u062A\u062E\u0641\u064A\u0641 \u0627\u0644\u0623\u0639\u0631\u0627\u0636:</h5>
          <ul>
            <li><b>\u0627\u0644\u062F\u0645\u0648\u0639 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u0629:</b> \u062E\u0627\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u0644\u0644\u0639\u064A\u0646 \u0627\u0644\u062C\u0627\u0641\u0629</li>
            <li><b>\u0642\u0637\u0631\u0627\u062A \u0645\u0636\u0627\u062F \u0627\u0644\u0647\u064A\u0633\u062A\u0627\u0645\u064A\u0646:</b> \u0644\u0644\u0625\u062C\u0647\u0627\u062F \u0627\u0644\u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u0644\u062D\u0633\u0627\u0633\u064A\u0629</li>
            <li><b>\u0646\u0638\u0627\u0631\u0627\u062A \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u0632\u0631\u0642:</b> \u0642\u062F \u062A\u0633\u0627\u0639\u062F \u0645\u0639 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0634\u0627\u0634\u0629</li>
          </ul>
        </div>
        <div class="warnings">
          <h5>\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631:</h5>
          <ul>
            <li>\u062A\u063A\u064A\u0631\u0627\u062A \u0645\u0633\u062A\u0645\u0631\u0629 \u0641\u064A \u0627\u0644\u0631\u0624\u064A\u0629</li>
            <li>\u0623\u0644\u0645 \u0634\u062F\u064A\u062F \u0641\u064A \u0627\u0644\u0639\u064A\u0646</li>
            <li>\u0627\u0644\u062D\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0636\u0648\u0621</li>
            <li>\u0627\u0633\u062A\u0628\u0639\u062F \u0627\u0644\u0632\u0631\u0642/\u062D\u0627\u0644\u0627\u062A \u0623\u062E\u0631\u0649</li>
          </ul>
        </div>
        <div class="advice">
          <h5>\u0627\u0644\u0648\u0642\u0627\u064A\u0629:</h5>
          <ul>
            <li>\u0642\u0627\u0639\u062F\u0629 20-20-20: \u0643\u0644 20 \u062F\u0642\u064A\u0642\u0629\u060C \u0627\u0646\u0638\u0631 \u0644\u0645\u0633\u0627\u0641\u0629 20 \u0642\u062F\u0645\u064B\u0627 \u0644\u0645\u062F\u0629 20 \u062B\u0627\u0646\u064A\u0629</li>
            <li>\u0645\u0633\u0627\u0641\u0629 \u0634\u0627\u0634\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 (\u0637\u0648\u0644 \u0627\u0644\u0630\u0631\u0627\u0639)</li>
            <li>\u0627\u0636\u0628\u0637 \u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0644\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0648\u0647\u062C</li>
            <li>\u0627\u063A\u0645\u0636 \u0639\u064A\u0646\u064A\u0643 frequently</li>
          </ul>
        </div>
      </div>`}};for(let s in i)if(s.split(",").map(r=>r.trim()).some(r=>r.toLowerCase()===l.toLowerCase()))return e?i[s].ar:i[s].en;return null}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-diagnosis-chat"]],standalone:!0,features:[T],decls:17,vars:4,consts:[[1,"chatbot-container"],[1,"chat-header"],[1,"header-content"],["class","user-info",4,"ngIf"],[1,"chat-window"],[1,"messages-container"],["class","message",3,"ngClass","innerHTML",4,"ngFor","ngForOf"],[1,"input-area"],["type","text","aria-label","Type your medical symptoms",3,"ngModelChange","keydown.enter","ngModel","placeholder"],[3,"click"],[1,"button-text"],[1,"disclaimer-footer"],[1,"user-info"],[1,"message",3,"ngClass","innerHTML"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),h(4,"Medical Assistant"),t()(),u(5,R,3,1,"div",3),t(),o(6,"div",4)(7,"div",5),u(8,N,1,2,"div",6),t()(),o(9,"div",7)(10,"input",8),A("ngModelChange",function(a){return w(i.userMessage,a)||(i.userMessage=a),a}),v("keydown.enter",function(){return i.sendMessage()}),t(),o(11,"button",9),v("click",function(){return i.sendMessage()}),o(12,"span",10),h(13,"Send"),t()()(),o(14,"div",11)(15,"p"),h(16,"Note: This is for informational purposes only and not a substitute for professional medical advice."),t()()()),e&2&&(d(5),c("ngIf",i.username),d(3),c("ngForOf",i.messages),d(2),M("ngModel",i.userMessage),c("placeholder",i.username?"Type your symptoms, "+i.username:"Type your symptoms..."))},dependencies:[E,x,S,P,_,O,k,I],styles:['[_nghost-%COMP%]{display:block;font-family:Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,sans-serif;color:#333;line-height:1.6;min-height:100vh!important}.chatbot-container[_ngcontent-%COMP%]{max-width:1200px;margin:30px auto;background-color:#fff;border-radius:12px;box-shadow:0 10px 30px #0000001a;overflow:hidden;display:flex;flex-direction:column;height:100vh}.chat-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#19b896dc);color:#fff;padding:16px 24px;display:flex;justify-content:space-between;align-items:center}.header-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.bot-icon[_ngcontent-%COMP%]{width:32px;height:32px}.user-info[_ngcontent-%COMP%]{font-size:14px;opacity:.9}.chat-window[_ngcontent-%COMP%]{flex:1;padding:20px;overflow-y:auto;background-color:#f9f9f9}.messages-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.message[_ngcontent-%COMP%]{max-width:80%;padding:12px 16px;border-radius:18px;font-size:15px;line-height:1.5;box-shadow:0 2px 4px #0000000d}.user[_ngcontent-%COMP%]{background-color:#e3f2fd;color:#0d47a1;margin-left:auto;border-bottom-right-radius:4px}.bot[_ngcontent-%COMP%]{background-color:#fff;margin-right:auto;border-bottom-left-radius:4px;box-shadow:0 2px 8px #00000014}.condition-response[_ngcontent-%COMP%]{padding:8px}.condition-response[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;color:#2c3e50;border-bottom:1px solid #eee;padding-bottom:8px}.medications[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%], .advice[_ngcontent-%COMP%]{margin-bottom:16px}.medications[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .advice[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:8px;color:#34495e}.medications[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .advice[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px;margin:8px 0}.medications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .warnings[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .advice[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:6px}.warnings[_ngcontent-%COMP%]{background-color:#fff8e1;padding:12px;border-radius:8px;border-left:4px solid #ffc107}.advice[_ngcontent-%COMP%]{background-color:#e8f5e9;padding:12px;border-radius:8px;border-left:4px solid #19b896dc}.disclaimer[_ngcontent-%COMP%]{font-size:13px;color:#666;margin-top:16px;padding:8px;background-color:#f5f5f5;border-radius:6px}.multi-condition[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:12px;border-radius:8px}.multi-condition[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2c3e50}.personal-note[_ngcontent-%COMP%]{font-weight:500;color:#e91e63;margin-bottom:12px}.welcome-message[_ngcontent-%COMP%]{text-align:center;padding:12px}.welcome-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2c3e50;margin-bottom:8px}.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;margin-bottom:12px}.examples[_ngcontent-%COMP%]{font-size:14px}.examples[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#e3f2fd;padding:2px 6px;border-radius:4px;margin:0 4px;color:#1976d2;font-size:13px}.input-area[_ngcontent-%COMP%]{display:flex;padding:16px;background-color:#fff;border-top:1px solid #eee}.input-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:12px 16px;border:1px solid #ddd;border-radius:24px;font-size:15px;outline:none;transition:border-color .3s}.input-area[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#4b6cb7}.input-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#19b896dc);color:#fff;border:none;border-radius:24px;padding:0 20px;margin-left:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:opacity .3s}.input-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.9}.button-text[_ngcontent-%COMP%]{margin-right:8px}.send-icon[_ngcontent-%COMP%]{width:20px;height:20px;fill:#fff}.disclaimer-footer[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:8px 16px;text-align:center;font-size:12px;color:#666;border-top:1px solid #eee}[dir=rtl][_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{text-align:right}[dir=rtl][_ngcontent-%COMP%]   .medications[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   .advice[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-right:20px;padding-left:0}@media (max-width: 768px){.chatbot-container[_ngcontent-%COMP%]{margin:0;border-radius:0;height:100vh}.message[_ngcontent-%COMP%]{max-width:90%}}.message[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp .4s ease;transition:transform .3s,opacity .3s;opacity:.95}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.medications[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:before{content:"\\1f48a  "}.warnings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:before{content:"\\26a0\\fe0f  "}.advice[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:before{content:"\\1f4a1  "}.personal-note[_ngcontent-%COMP%]:before{content:"\\1f464  ";margin-right:4px}.disclaimer[_ngcontent-%COMP%]:before{content:"\\1f4cc";margin-right:4px}.send-icon[_ngcontent-%COMP%]{font-family:Material Icons;font-size:20px;margin-left:4px;vertical-align:middle}']})}}return n})();export{G as DiagnosisChatComponent};
