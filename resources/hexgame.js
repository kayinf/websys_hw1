window.onload = function () {

	var options="";
	var round = 1;
	var r_s1 = 0, r_s2 = 0, g_s1 = 0, g_s2 = 0, b_s1 = 0, b_s2 = 0;
	
	
	for (var i=1; i<=10; i++) {
		options += "<option value="+i+"> "+i+" </option>";
	}
	
	$("#turns").html(options);
	$("#turns").hexed();
	options = "<option value=0> 0 </option>"+options;
	$("#difficulty").html(options);
	$("#difficulty").hexed();
	
	
	$("#score").html("Score: 0");
	$("#round").html("Round 1 of "+$("#turns").val());
	
	$("#turns").change(function(){
		$("#round").html("Round "+round+" of "+this.value);
	})
	
	$("#square1").hexImage();
	var original_color=$("#square1").css("background-color");
	original_color.slice(4,-1);
	original_color=original_color.split(", ")
	var original_red = original_color[0];
	var original_green = original_color[1];
	var original_blue = original_color[2];
	
	for (var i=11; i<=255; i++) {
		options += "<option value="+i+"> "+i+" </option>";
	}
	$("#square2").hide();
	$("#square2").hexImage({
		red: 0,
		green: 0,
		blue: 0
	});
	
	
	
	
	$("#redval").html(options);
	$("#redval").change(function(){
		$("#redslide").val(this.value);
		/*$("#square2").hexImage({
			red: $("#redval").val(),
			green: $("#greenval").val(),
			blue: $("#blueval").val()
		});*/
	});
	$("#redslide").click(function(){
		
	});
	
	$("#redslide").on("input", function(){
		r_s2 = this.value;
		$("#redval")[0][r_s1].selected=false;
		$("#redval")[0][r_s2].selected=true;
		r_s1 = r_s2;
		/*$("#square2").hexImage({
			red: $("#redslide").val(),
			green: $("#greenval").val(),
			blue: $("#blueval").val()
		});*/    
	});
	
    
    
    $("#greenval").html(options);
	$("#greenval").change(function(){
		$("#greenslide").val(this.value);
		$("#square2").hexImage({
			red: $("#redval").val(),
			green: $("#greenval").val(),
			blue: $("#blueval").val()
		});
	});
	
    $("#greenslide").on("input", function(){
    	g_s2 = this.value;
		$("#greenval")[0][g_s1].selected=false;
		$("#greenval")[0][g_s2].selected=true;
		g_s1 = g_s2;
		$("#square2").hexImage({
			red: $("#redval").val(),
			green: $("#greenslide").val(),
			blue: $("#blueval").val()
		});
    });
    
    
    $("#blueval").html(options);
	$("#blueval").change(function(){
		$("#blueslide").val(this.value);
		$("#square2").hexImage({
			red: $("#redval").val(),
			green: $("#greenval").val(),
			blue: $("#blueval").val()
		});
	});
    $("#blueslide").on("input", function () {
    	b_s2 = this.value;
		$("#blueval")[0][b_s1].selected=false;
		$("#blueval")[0][b_s2].selected=true;
		b_s1 = b_s2;
		$("#square2").hexImage({
			red: $("#redval").val(),
			green: $("#greenval").val(),
			blue: $("#blueslide").val()
		});
    });
    
    
    $("#checkIt").click(function(){
    	$("#square2").show();
    	$("error").error({
    		r_error: original_red-$("#redval").val(),
    		g_error: original_green-$("#greenval").val(),
    		b_error: original_blue-$("#blueval").val
    	});
    	
    	$("#error").html("red: "+ +", green: "+ +", blue: "+ );
    });

};

