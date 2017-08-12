function printWater(){
	for(var i=1;i<10;i++){
		for(var j=0;j<10;j++){
			for(var k=0;k<10;k++){
				if((i*i*i+j*j*j+k*k*k)==(100*i+10*j+k)){
					console.log(i*i*i+j*j*j+k*k*k);
				}
			}
		}
	}
}