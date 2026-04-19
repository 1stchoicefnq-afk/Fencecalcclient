document.getElementById("fnqFenceCalcMount").innerHTML = `
<section id="fnqFenceCalcPro" style="background:#121212;padding:60px 16px;font-family:Poppins,Arial,sans-serif;color:#F5F1E8;">
  <style>
    #fnqFenceCalcPro *{box-sizing:border-box}
    #fnqFenceCalcPro .w{max-width:1180px;margin:0 auto}
    #fnqFenceCalcPro .badge{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(198,167,94,.34);background:rgba(198,167,94,.08);color:#C6A75E;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}
    #fnqFenceCalcPro .dot{width:8px;height:8px;border-radius:50%;background:#C6A75E;display:block}
    #fnqFenceCalcPro h2{margin:0 0 12px 0;font-size:38px;line-height:1.08;font-weight:800;color:#fff;letter-spacing:-.03em}
    #fnqFenceCalcPro .intro{margin:0 0 24px 0;color:rgba(245,241,232,.78);font-size:15px;line-height:1.7;max-width:880px}
    #fnqFenceCalcPro .shell{display:grid;grid-template-columns:1.08fr .92fr;gap:24px;align-items:start}
    #fnqFenceCalcPro .panel{background:linear-gradient(180deg,#171717 0%,#131313 100%);border:1px solid rgba(198,167,94,.16);border-radius:22px;box-shadow:0 18px 50px rgba(0,0,0,.34)}
    #fnqFenceCalcPro .form{padding:24px}
    #fnqFenceCalcPro .sum{padding:20px;position:sticky;top:20px}
    #fnqFenceCalcPro .quote-panel{margin-top:24px;padding:24px}
    #fnqFenceCalcPro .sec{padding:18px 0;border-bottom:1px solid rgba(198,167,94,.08)}
    #fnqFenceCalcPro .sec:first-child{padding-top:0}
    #fnqFenceCalcPro .sec:last-child{border-bottom:none;padding-bottom:0}
    #fnqFenceCalcPro .sec h3{margin:0 0 12px 0;font-size:17px;color:#fff}
    #fnqFenceCalcPro .sub{margin:-4px 0 12px 0;font-size:12px;line-height:1.55;color:rgba(245,241,232,.6)}
    #fnqFenceCalcPro .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    #fnqFenceCalcPro .field{display:flex;flex-direction:column;gap:8px}
    #fnqFenceCalcPro .full{grid-column:1/-1}
    #fnqFenceCalcPro label{font-size:13px;font-weight:700;color:#E7D39B}
    #fnqFenceCalcPro input,#fnqFenceCalcPro select,#fnqFenceCalcPro textarea{width:100%;min-height:48px;padding:13px 14px;border-radius:14px;background:#0E0E0E;color:#F5F1E8;font-size:15px;border:1px solid rgba(198,167,94,.16);outline:none}
    #fnqFenceCalcPro textarea{min-height:100px;resize:vertical}
    #fnqFenceCalcPro input:focus,#fnqFenceCalcPro select:focus,#fnqFenceCalcPro textarea:focus{border-color:rgba(198,167,94,.46);box-shadow:0 0 0 4px rgba(198,167,94,.08)}
    #fnqFenceCalcPro .checks{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    #fnqFenceCalcPro .check{display:flex;align-items:center;gap:10px;min-height:48px;padding:12px 14px;border-radius:14px;background:#0E0E0E;border:1px solid rgba(198,167,94,.16)}
    #fnqFenceCalcPro .check input{width:18px!important;height:18px!important;min-height:18px!important;margin:0}
    #fnqFenceCalcPro .check span{font-size:14px;line-height:1.4}
    #fnqFenceCalcPro .hint{margin-top:8px;font-size:12px;line-height:1.55;color:rgba(245,241,232,.6)}
    #fnqFenceCalcPro .hide{display:none!important}
    #fnqFenceCalcPro .topcard{padding:18px;border-radius:18px;background:linear-gradient(180deg,rgba(198,167,94,.13),rgba(198,167,94,.06));border:1px solid rgba(198,167,94,.24)}
    #fnqFenceCalcPro .kicker{font-size:12px;font-weight:700;letter-spacing:.14em;color:#E7D39B;text-transform:uppercase;margin-bottom:8px}
    #fnqFenceCalcPro .total{font-size:36px;line-height:1;font-weight:800;color:#fff;letter-spacing:-.03em}
    #fnqFenceCalcPro .inc{font-size:13px;color:rgba(245,241,232,.68);margin-top:8px}
    #fnqFenceCalcPro .cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
    #fnqFenceCalcPro .card{padding:14px;border-radius:16px;background:#101010;border:1px solid rgba(198,167,94,.14)}
    #fnqFenceCalcPro .card .k{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#E7D39B;margin-bottom:8px}
    #fnqFenceCalcPro .card .v{font-size:20px;line-height:1.2;color:#fff;font-weight:800}
    #fnqFenceCalcPro .box{margin-top:12px;padding:14px 16px;border-radius:16px;background:#101010;border:1px solid rgba(198,167,94,.14)}
    #fnqFenceCalcPro .row{display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:1px solid rgba(198,167,94,.08);font-size:14px;line-height:1.45;color:rgba(245,241,232,.78)}
    #fnqFenceCalcPro .row:last-child{border-bottom:none}
    #fnqFenceCalcPro .row strong{color:#fff;text-align:right}
    #fnqFenceCalcPro .quote-panel h3{margin:0 0 10px 0;font-size:26px;color:#fff}
    #fnqFenceCalcPro .quote-panel p{margin:0 0 16px 0;font-size:14px;line-height:1.6;color:rgba(245,241,232,.72)}
    #fnqFenceCalcPro .btn{appearance:none;border:0;min-height:50px;padding:14px 16px;border-radius:14px;font-size:15px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;text-align:center;text-decoration:none;cursor:pointer}
    #fnqFenceCalcPro .btn1{background:#C6A75E;color:#121212}
    #fnqFenceCalcPro .btn[disabled]{opacity:.7;cursor:not-allowed}
    #fnqFenceCalcPro .send-status{margin-top:10px;font-size:13px;line-height:1.5;min-height:20px;color:#fff}
    #fnqFenceCalcPro .send-status.ok{color:#C6A75E;font-weight:700}
    #fnqFenceCalcPro .send-status.err{color:#fff}
    @media (max-width:1040px){
      #fnqFenceCalcPro .shell{grid-template-columns:1fr}
      #fnqFenceCalcPro .sum{position:relative;top:auto}
    }
    @media (max-width:760px){
      #fnqFenceCalcPro{padding:42px 14px}
      #fnqFenceCalcPro h2{font-size:30px}
      #fnqFenceCalcPro .form,#fnqFenceCalcPro .sum,#fnqFenceCalcPro .quote-panel{padding:18px}
      #fnqFenceCalcPro .grid,#fnqFenceCalcPro .cards,#fnqFenceCalcPro .checks{grid-template-columns:1fr}
      #fnqFenceCalcPro .total{font-size:28px}
    }
  </style>

  <div class="w">
    <div class="badge"><span class="dot"></span> Fence Calculator</div>
    <h2>Fence cost calculator for Cairns and Far North Queensland</h2>
    <p class="intro">Estimate the price of Colorbond fencing, timber fencing, pool fencing, aluminium slat fences, chainwire fencing and sliding gates installed. This is a realistic ballpark calculator for typical FNQ fencing jobs.</p>

    <div class="shell">
      <div class="panel form">
        <div class="sec">
          <h3>Project details</h3>
          <div class="grid">
            <div class="field full">
              <label for="fc_siteAddress2">Site address, include suburb</label>
              <input type="text" id="fc_siteAddress2" placeholder="Street, suburb">
            </div>
            <div class="field">
              <label for="fc_position2">Fence position</label>
              <select id="fc_position2">
                <option value="front">Front fence</option>
                <option value="rear">Rear fence</option>
                <option value="lhs">Left side fence</option>
                <option value="rhs">Right side fence</option>
                <option value="internal">Internal fence</option>
                <option value="perimeter">Full perimeter, multiple sides</option>
              </select>
            </div>
            <div class="field" id="fc_sidesWrap2" style="display:none;">
              <label for="fc_sides2">How many sides</label>
              <select id="fc_sides2">
                <option value="2">2 sides</option>
                <option value="3">3 sides</option>
                <option value="4">4 sides</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_fenceType2">Fence type</label>
              <select id="fc_fenceType2"></select>
            </div>
            <div class="field">
              <label for="fc_fenceHeight2">Fence height</label>
              <select id="fc_fenceHeight2"></select>
            </div>
            <div class="field">
              <label for="fc_length2">Fence length, whole metres only</label>
              <input type="number" id="fc_length2" min="1" step="1" value="20" inputmode="numeric" placeholder="Example 35">
            </div>
            <div class="field">
              <label for="fc_slope2">Site slope</label>
              <select id="fc_slope2">
                <option value="flat">Flat site</option>
                <option value="minor">Minor slope</option>
                <option value="moderate">Moderate slope / stepped</option>
                <option value="steep">Steep slope / difficult setout</option>
              </select>
            </div>
            <div class="field full" id="fc_customFenceWrap2" style="display:none;">
              <label for="fc_customFence2">Custom fence notes</label>
              <input type="text" id="fc_customFence2" placeholder="Tell us what you want, example custom feature fence, special posts, etc.">
            </div>
            <div class="field full" id="fc_colourWrap2" style="display:none;">
              <label for="fc_colour2">Fence colour</label>
              <select id="fc_colour2"></select>
              <div class="hint">Colours can be subject to supplier stock, some options may be special order.</div>
            </div>
          </div>
        </div>

        <div class="sec">
          <h3>Site conditions</h3>
          <div class="grid">
            <div class="field">
              <label for="fc_access2">Access</label>
              <select id="fc_access2">
                <option value="easy">Easy access, machine access</option>
                <option value="limited">Limited access, narrow access</option>
                <option value="none">No machine access, hand dig</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_ground2">Ground condition</label>
              <select id="fc_ground2">
                <option value="standard">Standard soil</option>
                <option value="roots">Roots</option>
                <option value="rock">Rock, hard dig</option>
                <option value="unsure">Unsure</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_timeline2">Timeline</label>
              <select id="fc_timeline2">
                <option value="normal">Flexible</option>
                <option value="urgent">Urgent, priority booking</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_budget2">Budget range</label>
              <select id="fc_budget2">
                <option value="under5">Under 5k</option>
                <option value="5to10">5k to 10k</option>
                <option value="10to20">10k to 20k</option>
                <option value="20plus">20k plus</option>
              </select>
            </div>
          </div>
        </div>

        <div class="sec" id="fc_chainWrap2" style="display:none;">
          <h3>Chainwire details</h3>
          <p class="sub">Used for 1.8 m chainwire pricing at 130 per metre plus GST. Corners, clearing and hard ground can change the final figure.</p>
          <div class="grid">
            <div class="field">
              <label for="fc_chainCorners2">Corners / strain assemblies</label>
              <select id="fc_chainCorners2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_chainClearing2">Fence line clearing</label>
              <select id="fc_chainClearing2">
                <option value="none">No clearing needed</option>
                <option value="light">Light clearing</option>
                <option value="moderate">Moderate clearing</option>
                <option value="heavy">Heavy clearing</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_chainSpec2">Chainwire setup</label>
              <select id="fc_chainSpec2">
                <option value="std">Standard 3 strain wire</option>
                <option value="heavy">Heavy duty 4 return / upgraded setup</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_chainEnds2">End assemblies</label>
              <select id="fc_chainEnds2">
                <option value="2">2 ends</option>
                <option value="3">3 ends</option>
                <option value="4">4 ends</option>
                <option value="5">5 ends</option>
                <option value="6">6 ends</option>
              </select>
            </div>
          </div>
        </div>

        <div class="sec">
          <h3>Fence options</h3>
          <div class="grid">
            <div class="field">
              <label for="fc_removeFence2">Remove existing fence</label>
              <select id="fc_removeFence2">
                <option value="none">No</option>
                <option value="timber">Yes, timber fence</option>
                <option value="metal">Yes, steel fence</option>
                <option value="block">Yes, block or masonry</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_sleeper2">Sleeper under fence</label>
              <select id="fc_sleeper2"></select>
              <div class="hint" id="fc_sleeperHint2" style="display:none;">Aluminium sleeper is usually the better long term option for Colorbond, cleaner finish, better lifespan and keeps sheets up off the ground.</div>
            </div>
            <div class="field full">
              <label>Extras</label>
              <div class="checks">
                <label class="check">
                  <input type="checkbox" id="fc_cornerReturn2">
                  <span>Corner / return section</span>
                </label>
                <label class="check">
                  <input type="checkbox" id="fc_onWall2">
                  <span>Fence sits on wall / slab fixing</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="sec">
          <h3>Gates</h3>
          <p class="sub">Single and double swing gates use your rates. Sliding gate pricing uses supplier based supply plus install allowances.</p>
          <div class="grid">
            <div class="field">
              <label for="fc_singleGateQty2">Single pedestrian gates</label>
              <select id="fc_singleGateQty2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_doubleGateQty2">Double gates</label>
              <select id="fc_doubleGateQty2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="field">
              <label for="fc_autoSlideGate2">Automated sliding gate</label>
              <select id="fc_autoSlideGate2">
                <option value="no">No automated sliding gate</option>
                <option value="yes">Yes, add automated sliding gate</option>
              </select>
            </div>
            <div class="field hide" id="fc_slideGateWidthWrap2">
              <label for="fc_slideGateWidth2">Sliding gate opening width, metres</label>
              <input type="number" id="fc_slideGateWidth2" min="2.0" step="0.1" placeholder="Example 3.9" inputmode="decimal">
            </div>
            <div class="field hide" id="fc_slideDirWrap2">
              <label for="fc_slideDir2">Sliding direction, looking from the street</label>
              <select id="fc_slideDir2">
                <option value="lhs">Slides to left</option>
                <option value="rhs">Slides to right</option>
              </select>
            </div>
            <div class="field full hide" id="fc_elecNoteWrap2">
              <div class="box" style="margin-top:0">
                <div class="hint">Electrical connection to automated gates must be completed by a licensed electrician. Power supply is not included in this estimate but can be organised and quoted separately if required.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sec">
          <h3>Notes</h3>
          <div class="grid">
            <div class="field full">
              <label for="fc_notes2">Extra notes</label>
              <textarea id="fc_notes2" placeholder="Access details, fence style, gate sizes, timing, colours, photos, pool compliance, anything important"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="panel sum">
        <div class="topcard">
          <div class="kicker">Estimated range</div>
          <div class="total" id="fc_totalRange2">$0 to $0</div>
          <div class="inc">incl GST</div>
          <div class="cards">
            <div class="card">
              <div class="k">Estimated rate</div>
              <div class="v" id="fc_rateDisplay2">$0 to $0/m</div>
            </div>
            <div class="card">
              <div class="k">Fence length</div>
              <div class="v" id="fc_lengthDisplay2">0m</div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="row"><span>Fence type</span><strong id="fc_typeOut2">-</strong></div>
          <div class="row"><span>Height</span><strong id="fc_heightOut2">-</strong></div>
          <div class="row"><span>Base fence</span><strong id="fc_baseOut2">$0</strong></div>
          <div class="row"><span>Gates</span><strong id="fc_gateOut2">$0</strong></div>
          <div class="row"><span>Removal / extras</span><strong id="fc_extraOut2">$0</strong></div>
          <div class="row"><span>Access / site adjustments</span><strong id="fc_adjOut2">$0</strong></div>
          <div class="row"><span>Estimated total</span><strong id="fc_totalOut2">$0</strong></div>
        </div>

        <div class="box">
          <div class="row"><span>Single gates</span><strong id="fc_singleOut2">0</strong></div>
          <div class="row"><span>Double gates</span><strong id="fc_doubleOut2">0</strong></div>
          <div class="row"><span>Sliding gate</span><strong id="fc_slideOut2">None</strong></div>
          <div class="row"><span>Access</span><strong id="fc_accessOut2">-</strong></div>
          <div class="row"><span>Ground</span><strong id="fc_groundOut2">-</strong></div>
          <div class="row"><span>Position</span><strong id="fc_positionOut2">-</strong></div>
        </div>

        <div class="box" id="fc_result2">
          <div class="hint">Start filling in the calculator to see your estimated fence price range.</div>
        </div>

        <div class="box">
          <div class="hint">Electrical connection to automated gates must be completed by a licensed electrician. Power supply is not included in this estimate but can be organised and quoted separately if required.</div>
          <div class="hint">Chainwire pricing assumes 1.8 m chainwire with steel posts at 130 per metre plus GST as the base fence rate, before gates, clearing, hard ground, corners and travel adjustments.</div>
          <div class="hint">This estimate assumes standard soil conditions and normal site access. Hard rock excavation, buried concrete, service relocations or restricted access may increase the final price after site inspection.</div>
          <div class="hint">All measurements and selections entered here are approximate. Final measurements, materials, colours and gate sizes will be confirmed before a formal quote is issued.</div>
          <div class="hint">This calculator provides a realistic ballpark estimate for typical FNQ installations. If the estimate is within your expected budget, you are welcome to request a formal quote.</div>
        </div>
      </div>
    </div>

    <div class="panel quote-panel">
      <h3>Request your formal quote</h3>
      <p>If this estimate looks close to your budget, fill out the form below and send your details, photos or plans. We will review it and get back to you.</p>

      <form id="fc_quoteForm2" action="https://formsubmit.co/1stchoicefnq@gmail.com" method="POST" enctype="multipart/form-data" target="fcQuoteHiddenFrame2">
        <div class="grid">
          <div class="field">
            <label for="fc_name2">Name</label>
            <input type="text" name="name" id="fc_name2" placeholder="Your name" required>
          </div>
          <div class="field">
            <label for="fc_email2">Email</label>
            <input type="email" name="email" id="fc_email2" placeholder="you@email.com" required>
          </div>
          <div class="field">
            <label for="fc_phone2">Phone</label>
            <input type="tel" name="phone" id="fc_phone2" placeholder="04xx xxx xxx" required>
          </div>
          <div class="field">
            <label for="fc_files2">Upload photos or plans</label>
            <input type="file" name="attachment" id="fc_files2" accept="image/*,application/pdf" multiple>
          </div>
          <div class="field full">
            <label for="fc_customerNotes2">Anything else</label>
            <textarea name="notes" id="fc_customerNotes2" rows="4" placeholder="Anything else you want us to know"></textarea>
          </div>
          <div class="field full">
            <label class="check" style="margin:0">
              <input type="checkbox" id="fc_terms2" required>
              <span>I understand this is an estimate only, final price confirmed after site inspection</span>
            </label>
          </div>
        </div>

        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_subject" value="New fence quote request - 1st Choice Property Maintenance">

        <input type="hidden" name="calc_summary" id="fc_hidden_summary2">
        <input type="hidden" name="estimated_range" id="fc_hidden_total2">
        <input type="hidden" name="budget" id="fc_hidden_budget2">
        <input type="hidden" name="site_address" id="fc_hidden_addr2">
        <input type="hidden" name="position" id="fc_hidden_position2">
        <input type="hidden" name="sides" id="fc_hidden_sides2">
        <input type="hidden" name="access" id="fc_hidden_access2">
        <input type="hidden" name="ground" id="fc_hidden_ground2">
        <input type="hidden" name="timeline" id="fc_hidden_timeline2">
        <input type="hidden" name="fence_details" id="fc_hidden_fence2">

        <button type="submit" class="btn btn1" id="fc_submitBtn2" style="width:100%;margin-top:14px">Send quote request</button>
        <div class="hint">This sends straight to 1stchoicefnq@gmail.com.</div>
        <div class="send-status" id="fc_formStatus2"></div>
      </form>
    </div>
  </div>

  <script>
    (function(){
      const FORM_ACTION="https://formsubmit.co/1stchoicefnq@gmail.com";
      const GST=1.1;

      const RATE_TIMBER_STD_EX=190/GST;
      const RATE_TIMBER_OC18_EX=220/GST;
      const RATE_TIMBER_OC20_EX=320/GST;
      const RATE_CB_STD_EX=220/GST;
      const RATE_POOL_ALU_EX=250/GST;
      const RATE_POOL_GLASS_EX=480/GST;
      const RATE_ALU_SLAT_EX=680/GST;
      const RATE_PRESS_POINT_EX=450/GST;
      const RATE_CHAINWIRE_EX=130/GST;

      const SLEEPER_TIMBER_PER_M_EX=50/GST;
      const SLEEPER_ALU_PER_M_EX=90/GST;

      const GATE_TIMBER_SINGLE_EX=1200/GST;
      const GATE_TIMBER_DOUBLE_EX=2200/GST;
      const GATE_CB_SINGLE_EX=1300/GST;
      const GATE_CB_DOUBLE_EX=2400/GST;
      const GATE_CHAIN_SINGLE_EX=950/GST;
      const GATE_CHAIN_DOUBLE_EX=1800/GST;

      const REMOVE_FENCE_PER_M_TIMBER_OR_STEEL_EX=10/GST;
      const CONCRETE_DUMP_PER_M2_EX=50/GST;

      const accessMult={easy:1,limited:1.12,none:1.25};
      const sidesMult={"2":1.03,"3":1.06,"4":1.08};
      const slopeMult={flat:1,minor:1.05,moderate:1.10,steep:1.18};
      const groundAdderPerMEx={standard:0,roots:25/GST,rock:70/GST,unsure:15/GST};

      const FRONT_ALLOWANCE_EX=400/GST;
      const URGENT_PCT_NORMAL=.10;
      const URGENT_PCT_OVER_20K=.08;
      const URGENT_THRESHOLD_EX=20000/GST;
      const MULTIPLIER_CAP=1.35;
      const MIN_FENCE_JOB_EX=1200/GST;

      const ON_WALL_ALLOWANCE_PER_M_EX=18/GST;
      const CORNER_RETURN_ALLOWANCE_EX=240/GST;

      const POOL_GATE_SINGLE_MULT=1.10;
      const GLASS_GATE_SINGLE_MULT=1.35;
      const SLAT_GATE_SINGLE_MULT=1.60;
      const SLAT_GATE_DOUBLE_MULT=2.70;
      const PRESS_GATE_SINGLE_MULT=1.40;
      const PRESS_GATE_DOUBLE_MULT=2.40;
      const CUSTOM_GATE_SINGLE_MULT=.95;
      const CUSTOM_GATE_DOUBLE_MULT=1.75;

      const CHAIN_CORNER_ASSEMBLY_EX=150/GST;
      const CHAIN_END_ASSEMBLY_EX=90/GST;
      const CHAIN_HEAVY_SETUP_PER_M_EX=6/GST;
      const CHAIN_CLEARING_EX={none:0,light:400/GST,moderate:900/GST,heavy:1800/GST};

      const SLIDE_STD_18H_GAL_EX={3.0:1338.10/GST,4.0:1500.00/GST,5.0:1693.35/GST,6.0:1970.88/GST};
      const SLIDE_PP_15H_EX=[{min:3.6,max:4.9,ex:1973.24/GST},{min:5.0,max:6.0,ex:2425.67/GST},{min:7.0,max:7.0,ex:2686.99/GST}];
      const SLIDE_PP_18H_EX=[{min:2.0,max:2.5,ex:1136.67/GST},{min:3.6,max:4.9,ex:2221.49/GST},{min:5.0,max:6.0,ex:2735.00/GST}];
      const SLIDE_PP_21H_EX=[{min:2.0,max:2.5,ex:1071.28/GST},{min:3.0,max:4.9,ex:2471.34/GST},{min:5.0,max:6.0,ex:2818.50/GST}];

      const SLIDE_GATE_MATERIAL_MARKUP=1.35;
      const SLIDE_TRACK_HARDWARE_ALLOW_EX=650/GST;
      const SLIDE_POSTS_ALLOW_EX=380/GST;
      const SLIDE_TRACK_FOOTING_ALLOW_EX=1200/GST;
      const SLIDE_INSTALL_LABOUR_ALLOW_EX=2200/GST;
      const SLIDE_MOTOR_KIT_EX=1236.68/GST;

      const COLORBOND_COLOURS=["Surfmist","Classic Cream","Paperbark","Evening Haze","Dune","Riversand","Domain","Shale Grey","Bluegum","Pale Eucalypt","Wilderness","Woodland Grey","Basalt","Ironstone","Monument","Gully","Jasper","Wallaby","Deep Ocean","Night Sky","Cottage Green","Manor Red","Other or special order"];
      const ALU_SLAT_COLOURS=["Monument","Surfmist","Pearl White","Black Satin","Woodland Grey","Other or special order"];

      const PREVIEW_MAP={
        colorbondStd:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/colorbond-hero-image.png/",
          label:"Colorbond fence"
        },
        poolAlu:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/Pool-fencing-cairns-hero-image.png/",
          label:"Flat top pool fence"
        },
        poolGlass:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/glassfence-cairns.png/",
          label:"Glass pool fence"
        },
        aluSlat:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/Aluminumslat-hero-image.png/",
          label:"Aluminium slat fence"
        },
        press:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/presspoint.png/",
          label:"Spear top / press point fence"
        },
        timberStd:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/timberfencecairns.png/",
          label:"Timber paling fence"
        },
        timberOC18:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/timberfencecairns.png/",
          label:"Timber overlap and cap fence"
        },
        timberOC20:{
          src:"https://img1.wsimg.com/isteam/ip/228f7ec4-d3e5-44c1-aeb1-3954d9b015b2/timberfencecairns.png/",
          label:"Timber overlap and cap with sleeper base"
        }
      };

      const $=id=>document.getElementById(id);
      const el={
        site:$("fc_siteAddress2"),position:$("fc_position2"),sidesWrap:$("fc_sidesWrap2"),sides:$("fc_sides2"),
        type:$("fc_fenceType2"),customWrap:$("fc_customFenceWrap2"),custom:$("fc_customFence2"),height:$("fc_fenceHeight2"),
        len:$("fc_length2"),slope:$("fc_slope2"),access:$("fc_access2"),ground:$("fc_ground2"),timeline:$("fc_timeline2"),
        budget:$("fc_budget2"),remove:$("fc_removeFence2"),sleeper:$("fc_sleeper2"),sleeperHint:$("fc_sleeperHint2"),colourWrap:$("fc_colourWrap2"),
        colour:$("fc_colour2"),corner:$("fc_cornerReturn2"),onWall:$("fc_onWall2"),singleQty:$("fc_singleGateQty2"),
        doubleQty:$("fc_doubleGateQty2"),slide:$("fc_autoSlideGate2"),slideWidthWrap:$("fc_slideGateWidthWrap2"),
        slideWidth:$("fc_slideGateWidth2"),slideDirWrap:$("fc_slideDirWrap2"),slideDir:$("fc_slideDir2"),
        elec:$("fc_elecNoteWrap2"),notes:$("fc_notes2"),
        chainWrap:$("fc_chainWrap2"),chainCorners:$("fc_chainCorners2"),chainClearing:$("fc_chainClearing2"),chainSpec:$("fc_chainSpec2"),chainEnds:$("fc_chainEnds2"),
        totalRange:$("fc_totalRange2"),rate:$("fc_rateDisplay2"),lengthDisplay:$("fc_lengthDisplay2"),
        typeOut:$("fc_typeOut2"),heightOut:$("fc_heightOut2"),baseOut:$("fc_baseOut2"),gateOut:$("fc_gateOut2"),
        extraOut:$("fc_extraOut2"),adjOut:$("fc_adjOut2"),totalOut:$("fc_totalOut2"),singleOut:$("fc_singleOut2"),
        doubleOut:$("fc_doubleOut2"),slideOut:$("fc_slideOut2"),accessOut:$("fc_accessOut2"),groundOut:$("fc_groundOut2"),
        positionOut:$("fc_positionOut2"),result:$("fc_result2"),
        hSum:$("fc_hidden_summary2"),hTotal:$("fc_hidden_total2"),hBudget:$("fc_hidden_budget2"),hAddr:$("fc_hidden_addr2"),
        hPos:$("fc_hidden_position2"),hSides:$("fc_hidden_sides2"),hAccess:$("fc_hidden_access2"),hGround:$("fc_hidden_ground2"),
        hTimeline:$("fc_hidden_timeline2"),hFence:$("fc_hidden_fence2"),
        quoteForm:$("fc_quoteForm2"),submitBtn:$("fc_submitBtn2"),formStatus:$("fc_formStatus2")
      };

      el.type.innerHTML='' +
        '<option value="timberStd">Timber paling</option>' +
        '<option value="timberOC18">Timber overlap and cap</option>' +
        '<option value="timberOC20">Timber overlap and cap with sleeper base</option>' +
        '<option value="colorbondStd">Colorbond</option>' +
        '<option value="chainwire">Chainwire steel posts</option>' +
        '<option value="poolAlu">Pool fence aluminium, flat top</option>' +
        '<option value="poolGlass">Frameless glass pool fence</option>' +
        '<option value="aluSlat">Aluminium slat</option>' +
        '<option value="press">Press point, spear top</option>' +
        '<option value="other">Other or custom</option>';

      function money(n){return "$"+Math.round(n).toLocaleString("en-AU")}
      function isWholePositiveInt(n){return Number.isFinite(n)&&n>0&&Number.isInteger(n)}
      function applyGst(n){return n*GST}
      function isChainwire(){return el.type.value==="chainwire"}

      function setStatus(node,msg,isOk){
        if(!node) return;
        node.textContent=msg||"";
        node.className="send-status"+(msg?(" "+(isOk?"ok":"err")):"");
      }

      function updatePerimeter(){el.sidesWrap.style.display=el.position.value==="perimeter"?"block":"none"}
      function updateCustom(){el.customWrap.style.display=el.type.value==="other"?"block":"none"}
      function updateChainwireUI(){el.chainWrap.style.display=isChainwire()?"block":"none"}
      function updateSlideUI(){
        const on=el.slide.value==="yes";
        el.slideWidthWrap.classList.toggle("hide",!on);
        el.slideDirWrap.classList.toggle("hide",!on);
        el.elec.classList.toggle("hide",!on);
      }

      function updateHeights(){
        let h=[],t=el.type.value;
        if(t==="timberOC20") h=[2.0];
        else if(t==="poolAlu"||t==="poolGlass") h=[1.2];
        else if(t==="aluSlat") h=[1.8];
        else if(t==="press") h=[1.5,1.8,2.1];
        else if(t==="chainwire") h=[1.8];
        else h=[1.2,1.5,1.8];
        if(el.position.value==="front"&&t!=="poolAlu"&&t!=="poolGlass"&&t!=="chainwire") h=Array.from(new Set(h.concat([2.0]))).sort((a,b)=>a-b);
        const old=el.height.value;
        el.height.innerHTML=h.map(v=>'<option value="'+v+'">'+Math.round(v*1000)+' mm</option>').join("");
        if([].slice.call(el.height.options).some(o=>o.value===old)) el.height.value=old;
      }

      function updateSleeper(){
        let t=el.type.value;
        el.sleeperHint.style.display="none";

        if(t==="timberOC20"){
          el.sleeper.innerHTML='<option value="included">Included</option>';
          el.sleeper.disabled=true;
          return;
        }

        if(t==="colorbondStd"){
          el.sleeper.innerHTML='<option value="none">No sleeper</option><option value="timber">Timber sleeper</option><option value="aluminium">Aluminium sleeper, recommended</option>';
          el.sleeper.disabled=false;
          el.sleeperHint.style.display="block";
          return;
        }

        if(t==="timberStd"||t==="timberOC18"){
          el.sleeper.innerHTML='<option value="none">None</option><option value="timber">Timber sleeper</option>';
          el.sleeper.disabled=false;
          return;
        }

        el.sleeper.innerHTML='<option value="none">None</option>';
        el.sleeper.disabled=true;
      }

      function updateColour(){
        let t=el.type.value;
        if(t==="colorbondStd"){
          el.colourWrap.style.display="block";
          el.colour.innerHTML=COLORBOND_COLOURS.map(c=>'<option value="'+c+'">'+c+'</option>').join("");
          return;
        }
        if(t==="aluSlat"){
          el.colourWrap.style.display="block";
          el.colour.innerHTML=ALU_SLAT_COLOURS.map(c=>'<option value="'+c+'">'+c+'</option>').join("");
          return;
        }
        el.colourWrap.style.display="none";
        el.colour.innerHTML="";
      }

      function validate(){
        if(!(el.site.value||"").trim()) return {ok:false,msg:"Please enter the site address including suburb."};
        let len=Number((el.len.value||"").trim());
        if(!isWholePositiveInt(len)) return {ok:false,msg:"Please enter whole metres for fence length, example 35."};
        if(el.slide.value==="yes"){
          let w=Number((el.slideWidth.value||"").trim());
          if(!Number.isFinite(w)||w<2.0) return {ok:false,msg:"Please enter a sliding gate width, example 3.9."};
        }
        if(el.type.value==="other"&&!(el.custom.value||"").trim()) return {ok:false,msg:"Please add custom fence notes so we know what style you want."};
        return {ok:true};
      }

      function rateEx(t){
        if(t==="timberStd") return RATE_TIMBER_STD_EX;
        if(t==="timberOC18") return RATE_TIMBER_OC18_EX;
        if(t==="timberOC20") return RATE_TIMBER_OC20_EX;
        if(t==="colorbondStd") return RATE_CB_STD_EX;
        if(t==="chainwire") return RATE_CHAINWIRE_EX;
        if(t==="poolAlu") return RATE_POOL_ALU_EX;
        if(t==="poolGlass") return RATE_POOL_GLASS_EX;
        if(t==="aluSlat") return RATE_ALU_SLAT_EX;
        if(t==="press") return RATE_PRESS_POINT_EX;
        return RATE_CB_STD_EX;
      }

      function singleGateEx(t){
        if(t==="chainwire") return GATE_CHAIN_SINGLE_EX;
        if(t==="colorbondStd") return GATE_CB_SINGLE_EX;
        if(t==="timberStd"||t==="timberOC18"||t==="timberOC20") return GATE_TIMBER_SINGLE_EX;
        if(t==="poolAlu") return GATE_CB_SINGLE_EX*POOL_GATE_SINGLE_MULT;
        if(t==="poolGlass") return GATE_CB_SINGLE_EX*GLASS_GATE_SINGLE_MULT;
        if(t==="aluSlat") return GATE_CB_SINGLE_EX*SLAT_GATE_SINGLE_MULT;
        if(t==="press") return GATE_CB_SINGLE_EX*PRESS_GATE_SINGLE_MULT;
        return GATE_CB_SINGLE_EX*CUSTOM_GATE_SINGLE_MULT;
      }

      function doubleGateEx(t){
        if(t==="chainwire") return GATE_CHAIN_DOUBLE_EX;
        if(t==="colorbondStd") return GATE_CB_DOUBLE_EX;
        if(t==="timberStd"||t==="timberOC18"||t==="timberOC20") return GATE_TIMBER_DOUBLE_EX;
        if(t==="poolAlu"||t==="poolGlass") return 0;
        if(t==="aluSlat") return GATE_CB_DOUBLE_EX*SLAT_GATE_DOUBLE_MULT;
        if(t==="press") return GATE_CB_DOUBLE_EX*PRESS_GATE_DOUBLE_MULT;
        return GATE_CB_DOUBLE_EX*CUSTOM_GATE_DOUBLE_MULT;
      }

      function pickStdSlide(width){
        const keys=[3.0,4.0,5.0,6.0];
        let best=6.0;
        for(let i=0;i<keys.length;i++){ if(width<=keys[i]+0.01){ best=keys[i]; break; } }
        return SLIDE_STD_18H_GAL_EX[best]||SLIDE_STD_18H_GAL_EX[6.0];
      }

      function pickPressSlide(h,width){
        const hh=(h<=1.55)?1.5:(h>=2.0?2.1:1.8);
        const list=hh===1.5?SLIDE_PP_15H_EX:(hh===2.1?SLIDE_PP_21H_EX:SLIDE_PP_18H_EX);
        for(let i=0;i<list.length;i++){ if(width>=list[i].min-0.001&&width<=list[i].max+0.001) return list[i].ex; }
        let best=list[0].ex,bestDist=9999;
        for(let i=0;i<list.length;i++){
          const mid=(list[i].min+list[i].max)/2,dist=Math.abs(width-mid);
          if(dist<bestDist){bestDist=dist;best=list[i].ex;}
        }
        return best;
      }

      function slideGateEx(type,height,width){
        const gateLeaf=(type==="press"?pickPressSlide(height,width):pickStdSlide(width))*SLIDE_GATE_MATERIAL_MARKUP;
        return gateLeaf+SLIDE_TRACK_HARDWARE_ALLOW_EX+SLIDE_POSTS_ALLOW_EX+SLIDE_TRACK_FOOTING_ALLOW_EX+SLIDE_INSTALL_LABOUR_ALLOW_EX+SLIDE_MOTOR_KIT_EX;
      }

      function rangeFactor(){
        let low=.06,high=.08;
        if(el.access.value==="limited"){low+=.02;high+=.03}
        if(el.access.value==="none"){low+=.04;high+=.05}
        if(el.ground.value==="roots"){low+=.02;high+=.03}
        if(el.ground.value==="rock"){low+=.04;high+=.06}
        if(el.ground.value==="unsure"){low+=.03;high+=.04}
        if(el.position.value==="perimeter"){low+=.02;high+=.03}
        if(el.slope.value==="minor"){low+=.01;high+=.02}
        if(el.slope.value==="moderate"){low+=.02;high+=.03}
        if(el.slope.value==="steep"){low+=.03;high+=.05}
        if(el.timeline.value==="urgent"){low+=.01;high+=.02}
        if(isChainwire()){
          const cc=Number(el.chainCorners.value||0);
          if(cc>=4){low+=.01;high+=.02}
          if(el.chainClearing.value==="moderate"){low+=.01;high+=.02}
          if(el.chainClearing.value==="heavy"){low+=.02;high+=.03}
        }
        return {low:Math.min(low,.18),high:Math.min(high,.22)};
      }

      function calc(){
        const len=Number(el.len.value||0),type=el.type.value,height=Number(el.height.value||0);
        const singleQty=Number(el.singleQty.value||0),doubleQty=Number(el.doubleQty.value||0);

        let base=len*rateEx(type),gates=0,extras=0;

        if(el.sleeper.value==="timber") extras+=len*SLEEPER_TIMBER_PER_M_EX;
        if(el.sleeper.value==="aluminium") extras+=len*SLEEPER_ALU_PER_M_EX;

        gates+=singleQty*singleGateEx(type);
        gates+=doubleQty*doubleGateEx(type);
        if(el.slide.value==="yes") gates+=slideGateEx(type,height,Number(el.slideWidth.value||0));

        if(el.remove.value==="timber"||el.remove.value==="metal") extras+=len*REMOVE_FENCE_PER_M_TIMBER_OR_STEEL_EX;
        if(el.remove.value==="block") extras+=(len*height)*CONCRETE_DUMP_PER_M2_EX;

        extras+=len*(groundAdderPerMEx[el.ground.value]||0);

        if(el.corner.checked) extras+=CORNER_RETURN_ALLOWANCE_EX;
        if(el.onWall.checked) extras+=len*ON_WALL_ALLOWANCE_PER_M_EX;
        if(el.position.value==="front") extras+=FRONT_ALLOWANCE_EX;

        if(isChainwire()){
          extras+=Number(el.chainCorners.value||0)*CHAIN_CORNER_ASSEMBLY_EX;
          extras+=Number(el.chainEnds.value||0)*CHAIN_END_ASSEMBLY_EX;
          extras+=(CHAIN_CLEARING_EX[el.chainClearing.value]||0);
          if(el.chainSpec.value==="heavy") extras+=len*CHAIN_HEAVY_SETUP_PER_M_EX;
        }

        const raw=base+gates+extras;
        let total=raw;

        total*=accessMult[el.access.value]||1;
        total*=slopeMult[el.slope.value]||1;
        if(el.position.value==="perimeter") total*=sidesMult[el.sides.value]||1.03;

        if(el.timeline.value==="urgent"){
          const pct=total>=URGENT_THRESHOLD_EX?URGENT_PCT_OVER_20K:URGENT_PCT_NORMAL;
          total*=(1+pct);
        }

        total=Math.min(total,raw*MULTIPLIER_CAP);
        if(total<MIN_FENCE_JOB_EX) total=MIN_FENCE_JOB_EX;

        return {base:base,gates:gates,extras:extras,adjust:total-(base+gates+extras),total:total};
      }

      function details(c){
        let s="";
        s+="Fence type: "+el.type.options[el.type.selectedIndex].text+"\n";
        if((el.custom.value||"").trim()) s+="Custom notes: "+el.custom.value.trim()+"\n";
        s+="Fence height: "+el.height.options[el.height.selectedIndex].text+"\n";
        s+="Fence length: "+el.len.value+" m\n";
        s+="Position: "+el.position.options[el.position.selectedIndex].text+"\n";
        if(el.position.value==="perimeter") s+="Sides: "+el.sides.value+"\n";
        s+="Slope: "+el.slope.options[el.slope.selectedIndex].text+"\n";
        s+="Access: "+el.access.options[el.access.selectedIndex].text+"\n";
        s+="Ground: "+el.ground.options[el.ground.selectedIndex].text+"\n";
        s+="Timeline: "+el.timeline.options[el.timeline.selectedIndex].text+"\n";
        s+="Remove existing: "+el.remove.options[el.remove.selectedIndex].text+"\n";
        s+="Sleeper: "+el.sleeper.options[el.sleeper.selectedIndex].text+"\n";
        if(el.colour.value) s+="Colour: "+el.colour.value+"\n";
        if(isChainwire()){
          s+="Chainwire corners / strain assemblies: "+el.chainCorners.value+"\n";
          s+="Chainwire end assemblies: "+el.chainEnds.value+"\n";
          s+="Chainwire clearing: "+el.chainClearing.options[el.chainClearing.selectedIndex].text+"\n";
          s+="Chainwire setup: "+el.chainSpec.options[el.chainSpec.selectedIndex].text+"\n";
        }
        s+="Corner / return: "+(el.corner.checked?"Yes":"No")+"\n";
        s+="On wall / slab fixing: "+(el.onWall.checked?"Yes":"No")+"\n";
        s+="Single gates: "+el.singleQty.value+"\n";
        s+="Double gates: "+el.doubleQty.value+"\n";
        if(el.slide.value==="yes"){
          s+="Automated sliding gate: Yes\n";
          s+="Sliding gate width: "+(el.slideWidth.value||"")+" m\n";
          s+="Sliding direction: "+el.slideDir.options[el.slideDir.selectedIndex].text+"\n";
          s+="Electrical: Licensed electrician required, quoted separately\n";
        } else {
          s+="Automated sliding gate: No\n";
        }
        if((el.notes.value||"").trim()) s+="Extra notes: "+el.notes.value.trim()+"\n";
        s+="Estimated total: "+money(applyGst(c.total))+" incl GST\n";
        return s.trim();
      }

      function updateHidden(c,rangeText){
        const d=details(c);
        el.hSum.value=d;
        el.hTotal.value=rangeText;
        el.hBudget.value=el.budget.value;
        el.hAddr.value=(el.site.value||"").trim();
        el.hPos.value=el.position.value;
        el.hSides.value=el.position.value==="perimeter"?(el.sides.value||""):"";
        el.hAccess.value=el.access.value;
        el.hGround.value=el.ground.value;
        el.hTimeline.value=el.timeline.value;
        el.hFence.value=d;
      }

      function render(){
        const v=validate();
        if(!v.ok){
          el.result.innerHTML='<div class="hint">'+v.msg+'</div>';
          el.totalRange.textContent="$0 to $0";
          el.rate.textContent="$0 to $0/m";
          el.baseOut.textContent="$0";
          el.gateOut.textContent="$0";
          el.extraOut.textContent="$0";
          el.adjOut.textContent="$0";
          el.totalOut.textContent="$0";
          el.typeOut.textContent="-";
          el.heightOut.textContent="-";
          el.singleOut.textContent="0";
          el.doubleOut.textContent="0";
          el.slideOut.textContent="None";
          el.accessOut.textContent="-";
          el.groundOut.textContent="-";
          el.positionOut.textContent="-";
          return;
        }

        const c=calc(),rf=rangeFactor(),display=applyGst(c.total),len=Math.max(Number(el.len.value||1),1);

        const fenceOnlyEx = c.base + c.extras + c.adjust;
        const fenceOnlyInc = applyGst(fenceOnlyEx);

        const lo = fenceOnlyInc * (1-rf.low);
        const hi = fenceOnlyInc * (1+rf.high);

        const rateLow = Math.round(lo/len);
        const rateHigh = Math.round(hi/len);
        const rangeText = money(lo)+" to "+money(hi);

        el.totalRange.textContent=rangeText;
        el.rate.textContent=money(rateLow)+" to "+money(rateHigh)+"/m";
        el.lengthDisplay.textContent=len+"m";
        el.typeOut.textContent=el.type.options[el.type.selectedIndex].text;
        el.heightOut.textContent=el.height.options[el.height.selectedIndex].text;
        el.baseOut.textContent=money(applyGst(c.base));
        el.gateOut.textContent=money(applyGst(c.gates));
        el.extraOut.textContent=money(applyGst(c.extras));
        el.adjOut.textContent=money(applyGst(c.adjust));
        el.totalOut.textContent=money(display);
        el.singleOut.textContent=el.singleQty.value;
        el.doubleOut.textContent=el.doubleQty.value;
        el.slideOut.textContent=el.slide.value==="yes"?((el.slideWidth.value||"")+"m"):"None";
        el.accessOut.textContent=el.access.options[el.access.selectedIndex].text;
        el.groundOut.textContent=el.ground.options[el.ground.selectedIndex].text;
        el.positionOut.textContent=el.position.options[el.position.selectedIndex].text;

        let extraChainHints="";
        if(isChainwire()){
          extraChainHints=
            '<div class="hint">Chainwire base rate used here is 130 per metre plus GST for 1.8 m chainwire with steel posts.</div>'+
            '<div class="hint">Corners, strain assemblies, clearing, hard ground and gates are added separately where selected.</div>';
        }

        let upsellHtml="";
        if(el.type.value==="colorbondStd"&&el.sleeper.value==="none"){
          upsellHtml=
            '<div class="hint" style="color:#E7D39B;">Recommended upgrade: aluminium sleeper under Colorbond gives a cleaner finish, lifts the sheets off the ground and usually lasts better long term.</div>';
        }

        let slopeHtml="";
        if(el.slope.value!=="flat"){
          slopeHtml=
            '<div class="hint" style="color:#E7D39B;">Slope detected: this estimate has been adjusted for extra setout, stepping and installation labour.</div>';
        }

        const preview=PREVIEW_MAP[el.type.value];
        const previewHtml=preview
          ? '<div style="margin-top:12px;border-radius:14px;overflow:hidden;border:1px solid rgba(198,167,94,.14);background:#101010;">' +
              '<img src="'+preview.src+'" alt="'+preview.label+'" style="width:100%;height:180px;object-fit:cover;display:block;">' +
              '<div style="padding:10px;font-size:13px;color:#aaa;text-align:center;">'+preview.label+'</div>' +
            '</div>'
          : '';

        el.result.innerHTML='' +
          '<div class="hint">Fence estimate: '+money(display)+' incl GST</div>' +
          '<div class="hint">Estimated rate: Approximately '+money(rateLow)+' to '+money(rateHigh)+' per metre installed</div>' +
          '<div class="hint">Estimated range: '+rangeText+'</div>' +
          upsellHtml +
          slopeHtml +
          previewHtml +
          '<div style="margin-top:12px;padding:14px 14px 12px;border-radius:14px;background:linear-gradient(180deg,rgba(198,167,94,.10),rgba(198,167,94,.04));border:1px solid rgba(198,167,94,.18);">' +
            '<div style="font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E7D39B;margin-bottom:8px;">Finance options</div>' +
            '<div class="hint" style="margin:0 0 8px 0;color:#F5F1E8;">Need help getting the project done sooner?</div>' +
            '<div class="hint" style="margin:0 0 10px 0;">If the upfront cost is the only thing holding the project back, finance options may be worth exploring.</div>' +
            '<a href="https://greenfinancegroup.com.au/myfinancebroker/rodneyweir/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:0 16px;border-radius:10px;background:#C6A75E;color:#121212;text-decoration:none;font-size:14px;font-weight:800;">Explore finance options</a>' +
            '<div class="hint" style="margin-top:10px;">Finance is not provided by 1st Choice Property Maintenance. The button above links directly to an independent finance broker. Any finance is arranged directly with the broker and is subject to approval, lending criteria and terms.</div>' +
          '</div>' +
          extraChainHints;

        updateHidden(c,rangeText);
      }

      function ensureFrame(frameId){
        let old=document.getElementById(frameId);
        if(old) old.remove();
        const iframe=document.createElement("iframe");
        iframe.name=frameId;
        iframe.id=frameId;
        iframe.style.display="none";
        document.body.appendChild(iframe);
      }

      function handleQuoteSubmit(e){
        e.preventDefault();

        const v=validate();
        if(!v.ok){
          render();
          setStatus(el.formStatus,v.msg,false);
          return;
        }

        const terms=document.getElementById("fc_terms2");
        if(terms && !terms.checked){
          setStatus(el.formStatus,"Please confirm the estimate only checkbox.",false);
          return;
        }

        setStatus(el.formStatus,"Sending...",false);
        el.submitBtn.disabled=true;
        el.submitBtn.textContent="Sending...";

        const iframeName="fcQuoteHiddenFrame2";
        ensureFrame(iframeName);
        el.quoteForm.target=iframeName;
        el.quoteForm.action=FORM_ACTION;
        el.quoteForm.submit();

        setStatus(el.formStatus,"Thanks, your quote was sent. We will get back to you shortly.",true);
        el.submitBtn.textContent="Sent";
      }

      function bind(){
        [
          el.site,el.position,el.sides,el.type,el.custom,el.height,el.len,el.slope,el.access,el.ground,el.timeline,
          el.budget,el.remove,el.sleeper,el.colour,el.corner,el.onWall,el.singleQty,el.doubleQty,el.slide,
          el.slideWidth,el.slideDir,el.notes,el.chainCorners,el.chainClearing,el.chainSpec,el.chainEnds
        ].forEach(function(n){
          n.addEventListener("input",render);
          n.addEventListener("change",render);
        });

        el.position.addEventListener("change",function(){updatePerimeter();updateHeights();render()});
        el.type.addEventListener("change",function(){
          updateHeights();
          updateSleeper();
          updateColour();
          updateCustom();
          updateChainwireUI();
          render();
        });
        el.slide.addEventListener("change",function(){updateSlideUI();render()});
        el.quoteForm.addEventListener("submit",handleQuoteSubmit);
      }

      updatePerimeter();
      updateHeights();
      updateSleeper();
      updateColour();
      updateCustom();
      updateChainwireUI();
      updateSlideUI();
      bind();
      render();
    })();
  </script>
</section>
`;
