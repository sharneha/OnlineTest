<div id="overall">
<div class="container">
            <div class="row" id="mainform">
					<div class="col-2 col-lg-1 label-form nonselect"><strong>Email:</strong></div>
					<div class="col"><input type="text" id="email" placeholder="abc@timesgroup.com" required></div>
			</div>
			<div class="row">
				<div id="note" class="nonselect">
					<h5 id="noteheading">Note:</h5>
				    <ul>
						<li>This strenghfinder will  take <strong>10 minutes</strong>  to complete. You are required to indicate how strongly you agree or disagree with a set of behavioural statements.</li>
						<li>This assessor will help you discover your dominant core values, hence choosing neutral statements may not reflect the true values you stand for.</li>
						<li>Answer the questions quickly, from your “gut” or “heart.” <strong>There are no right or wrong answers.</strong> Your first response is usually the most  authentically you, so don’t overthink the answers.</li>
						<li>Remember to take the assessment as your <strong>natural self</strong>. Do not answer how you wish you were or how you think others at work or at home want you to be. Be true to who you are. </li>
						<li>When in doubt, Use work scenarios as a reference to  validate your choice</li>
						<li>Don't refresh the page while giving the strengthfinder test.</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-1 offset-lg-5 col-1 offset-4">
					<button class="btn btn-success" id="loginbtnsbmt" onclick="fmbtn();">Start the Test</button>
				</div>
			</div>
</div>
    
</div>
<div id="maincontent">
	<h6>Please indicate how strongly you agree or disagree with the following statements using the drop down menu</h6>
	<br>
	<!-- <form id="Softskills"> -->
	<table id="disp_table" class="table-hover">
	<thead class="thead-dark">
		<th>S.No</th>
		<th>Question</th>
		<th>Options</th>
	</thead>
	<tbody></tbody>
	</table>
	<!-- </form> -->
	<div id="excitearea">
	<label for="excite"><strong>List top 3 elements that make you excited about working in BCCL:</strong></label>
	<br>
	<textarea id="excite" rows="4" cols="45" placeholder="This is not mandatory"></textarea>
	</div>
	<!-- Submit Button -->
	<div class="mx-auto" id="btnarea">
		<input class="btn btn-primary btn-lg" type="submit" value="Submit" id="sbbtn" onclick="sbtgnt()">
	</div>
</div>
<!-- Output behaviour values -->
<div id="outputbehaviour">
	<div class="headingmain">CLASIC Core Values that you highly identify with</div>
	<div class="headingsub" id="moreheading">Looks like you need to change some of your habits.</div>
	<div class="heading" id="headoutput0">Innovation</div>
		<div class="outputcontent" id="output0"></div>
	<div class="heading" id="headoutput1">Accountability</div>
		<div class="outputcontent" id="output1"></div>
	<div class="heading" id="headoutput2">Collaboration</div>
		<div class="outputcontent" id="output2"></div>
	<div class="heading" id="headoutput3">Compassion</div>
		<div class="outputcontent" id="output3"></div>
	<div class="heading" id="headoutput4">Learning</div>
		<div class="outputcontent" id="output4"></div>
	<div class="heading" id="headoutput5">Speed</div>
		<div class="outputcontent" id="output5"></div>
<!-- Change of focus of values -->
	<div class="headingmain">CLASIC Core Values that you should focus on inculcating</div>
	<div class="headingsub" id="lessheading">Congratulations. You have all the right qualities.</div>
	<div class="heading" id="headdoutput0">Innovation</div>
		<div class="outputcontent" id="doutput0"></div>
	<div class="heading" id="headdoutput1">Accountability</div>
		<div class="outputcontent" id="doutput1"></div>
	<div class="heading" id="headdoutput2">Collaboration</div>
		<div class="outputcontent" id="doutput2"></div>
	<div class="heading" id="headdoutput3">Compassion</div>
		<div class="outputcontent" id="doutput3"></div>
	<div class="heading" id="headdoutput4">Learning</div>
		<div class="outputcontent" id="doutput4"></div>
	<div class="heading" id="headdoutput5">Speed</div>
		<div class="outputcontent" id="doutput5"></div>
	<br><br>
	<!-- Chart -->
	<div id="scorechart">Your CLASIC Strength Finder Score Chart</div>
	<canvas id="myChart"></canvas>
</div>
