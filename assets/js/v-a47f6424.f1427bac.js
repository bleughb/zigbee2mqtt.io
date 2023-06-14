"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11417],{460100:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-a47f6424","path":"/devices/ZS130000078.html","title":"Linkind ZS130000078 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Linkind ZS130000078 control via MQTT","description":"Integrate your Linkind ZS130000078 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"General","slug":"general","link":"#general","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Initialize after pairing","slug":"initialize-after-pairing","link":"#initialize-after-pairing","children":[]},{"level":3,"title":"Arming/Disarming from the server","slug":"arming-disarming-from-the-server","link":"#arming-disarming-from-the-server","children":[]},{"level":3,"title":"Arming/Disarming from the keypad","slug":"arming-disarming-from-the-keypad","link":"#arming-disarming-from-the-keypad","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Action_code (numeric)","slug":"action-code-numeric","link":"#action-code-numeric","children":[]},{"level":3,"title":"Action_transaction (numeric)","slug":"action-transaction-numeric","link":"#action-transaction-numeric","children":[]},{"level":3,"title":"Action_zone (text)","slug":"action-zone-text","link":"#action-zone-text","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1686766960000},"filePathRelative":"devices/ZS130000078.md"}')},98945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(166252);const i=(0,n._)("h1",{id:"linkind-zs130000078",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linkind-zs130000078","aria-hidden":"true"},"#"),(0,n.Uk)(" Linkind ZS130000078")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"ZS130000078")],-1),r=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Security keypad battery")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, voltage, battery_low, occupancy, tamper, action_code, action_transaction, action_zone, action, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZS130000078.jpg",alt:"Linkind ZS130000078"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h3><p>Once the device is turned on, it usually publishes some status messages to z2m that look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>info  2022-02-18 19:20:02: MQTT publish: topic &#39;zigbee2mqtt/LinkindKeypad&#39;, payload &#39;{&quot;ac_status&quot;:false,&quot;battery&quot;:100,&quot;battery_low&quot;:false,&quot;linkquality&quot;:32,&quot;occupancy&quot;:false,&quot;restore_reports&quot;:true,&quot;smoke&quot;:false,&quot;supervision_reports&quot;:true,&quot;tamper&quot;:true,&quot;test&quot;:false,&quot;trouble&quot;:false,&quot;voltage&quot;:3000}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here it should give you already an overview about the linkquality, battery etc. If nothing is happening after turning on, check your z2m and hardware setup again and retry.</p><p>The keypad has a proximity sensor builtin, which turns on the light of the keys and LEDs whenever your hand gets close to it and signals this with a beep as well. At this stage, there is not much you can do with the keypad. Pressing any button has no effect and usually the network LED is blinking orange. After a couple of seconds the keypad gives up and gets back into standby. This repeats until you will pair it and initialize it properly like described below.</p><p>In general, once properly setup, the current arm mode on the keypad is shown, by highlighting one of the (dis)arm buttons on the right with a greenish color.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>In order to pair the keypad with z2m, simply use a paperclip and stick it to the small hole on the back of the keypad and hold it for a couple of seconds until the network LED is blinking green quickly. You find the hole in the area where the wallmounting clip will be placed. Now watch the logs for z2m to see the keypad being interviewed, configured and finally detected as Linkind Keypad device:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2022-02-16 23:26:21: Device &#39;0x588e81fffe21eede&#39; joined\nZigbee2MQTT:info  2022-02-16 23:26:21: MQTT publish: topic &#39;zigbee2mqtt/bridge/event&#39;, payload &#39;{&quot;data&quot;:{&quot;friendly_name&quot;:&quot;0x588e81fffe21eede&quot;,&quot;ieee_address&quot;:&quot;0x588e81fffe21eede&quot;},&quot;type&quot;:&quot;device_joined&quot;}&#39;\nZigbee2MQTT:info  2022-02-16 23:26:21: Configuring &#39;0x588e81fffe21eede&#39;\nZigbee2MQTT:info  2022-02-16 23:26:21: Starting interview of &#39;0x588e81fffe21eede&#39;\nZigbee2MQTT:info  2022-02-16 23:26:21: MQTT publish: topic &#39;zigbee2mqtt/bridge/event&#39;, payload &#39;{&quot;data&quot;:{&quot;friendly_name&quot;:&quot;0x588e81fffe21eede&quot;,&quot;ieee_address&quot;:&quot;0x588e81fffe21eede&quot;,&quot;status&quot;:&quot;started&quot;},&quot;type&quot;:&quot;device_interview&quot;}&#39;\nZigbee2MQTT:info  2022-02-16 23:26:26: MQTT publish: topic &#39;zigbee2mqtt/bridge/event&#39;, payload &#39;{&quot;data&quot;:{&quot;friendly_name&quot;:&quot;0x588e81fffe21eede&quot;,&quot;ieee_address&quot;:&quot;0x588e81fffe21eede&quot;},&quot;type&quot;:&quot;device_announce&quot;}&#39;\nZigbee2MQTT:error 2022-02-16 23:26:31: Failed to configure &#39;0x588e81fffe21eede&#39;, attempt 3 (Error: Bind 0x588e81fffe21eede/1 genPowerCfg from &#39;0x00124b00258db1c4/1&#39; failed (AREQ - ZDO - bindRsp after 10000ms)\n    at Timeout._onTimeout (..\\zigbee2mqtt\\node_modules\\zigbee-herdsman\\src\\utils\\waitress.ts:64:35)\n    at listOnTimeout (node:internal/timers:559:17)\n    at processTimers (node:internal/timers:502:7))\nZigbee2MQTT:info  2022-02-16 23:26:42: Successfully interviewed &#39;0x588e81fffe21eede&#39;, device has successfully been paired\nZigbee2MQTT:info  2022-02-16 23:26:42: Device &#39;0x588e81fffe21eede&#39; is supported, identified as: Linkind Security keypad battery (ZS130000078)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see it can happen that it fails a couple of times - then simply wait and retry if needed.</p><h3 id="initialize-after-pairing" tabindex="-1"><a class="header-anchor" href="#initialize-after-pairing" aria-hidden="true">#</a> Initialize after pairing</h3><p>Once the keypad is successfully paired, it will still show the behavior like explained in the general section above. In order to properly initialize it, you have to send the following payload to the MQTT topic you created for it appending <code>/set</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disarm&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will set the keyboard into disarmed mode, ready to be used as it should be. Now you can actually press one of the (dis)arm buttons on the right, enter a code and press the check symbol. Then you should see a payload containing the action mode, transaction and code.</p><p>Whenever you stop z2m, you have to re-send the payload above in order to init it again. I haven&#39;t tried it, but maybe sending the actual arm mode state from the service could also work.</p><h3 id="arming-disarming-from-the-server" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-server" aria-hidden="true">#</a> Arming/Disarming from the server</h3><p>To set arming mode publish the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> topic:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values as per ZCL specifications are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_night_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>entry_delay</code>, <code>not_ready</code>, <code>in_alarm</code>, <code>arming_stay</code>, <code>arming_night</code>, <code>arming_away</code>.</p><h3 id="arming-disarming-from-the-keypad" tabindex="-1"><a class="header-anchor" href="#arming-disarming-from-the-keypad" aria-hidden="true">#</a> Arming/Disarming from the keypad</h3><p>When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic <code>zigbee2mqtt/FRIENDLY_NAME</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span><span class="token punctuation">,</span> <span class="token comment">// This is the example</span>\n    <span class="token string-property property">&quot;action_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token comment">// The code being entered</span>\n    <span class="token string-property property">&quot;action_zone&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// The zone being armed (always 0)</span>\n    <span class="token string-property property">&quot;action_transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token comment">// The transaction number</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The automation server must validate the request and send a notification to the keypad, confirming or denying the request.</p><p>Do so by sending the following payload to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;arm_mode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string-property property">&quot;transaction&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token comment">// Transaction number (this must be the same as the keypad request `action_transaction`)</span>\n        <span class="token string-property property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arm_all_zones&quot;</span> <span class="token comment">// Mode (this must be the same as the keypad request `action`)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Valid <code>mode</code> values are <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_all_zones</code>, <code>invalid_code</code>, <code>not_ready</code>, <code>already_disarmed</code></p><p>The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with <code>exit_delay</code>, count the elapsed time (e.g 30 secs), then change mode again to <code>arm_all_zones</code> (see &quot;Arming/Disarming from the server&quot; section above)</p>',28),p=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),h=(0,n.uE)('<ul><li><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="action-code-numeric" tabindex="-1"><a class="header-anchor" href="#action-code-numeric" aria-hidden="true">#</a> Action_code (numeric)</h3><p>Pin code introduced.. Value can be found in the published state on the <code>action_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transaction-numeric" tabindex="-1"><a class="header-anchor" href="#action-transaction-numeric" aria-hidden="true">#</a> Action_transaction (numeric)</h3><p>Last action transaction number.. Value can be found in the published state on the <code>action_transaction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-zone-text" tabindex="-1"><a class="header-anchor" href="#action-zone-text" aria-hidden="true">#</a> Action_zone (text)</h3><p>Alarm zone. Default value 23. Value can be found in the published state on the <code>action_zone</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>panic</code>, <code>disarm</code>, <code>arm_day_zones</code>, <code>arm_all_zones</code>, <code>exit_delay</code>, <code>entry_delay</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),m={},g=(0,a(983744).Z)(m,[["render",function(e,t){const a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),i,(0,n._)("table",null,[o,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(a,{to:"/supported-devices/#v=Linkind"},{default:(0,n.w5)((()=>[(0,n.Uk)("Linkind")])),_:1})])]),d,l,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n.kq)(" Notes END: Do not edit below this line "),p,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);