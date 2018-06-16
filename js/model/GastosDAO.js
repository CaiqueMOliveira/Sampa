class GastosDAO
{

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador
	 */
	getGastosPessoais(callbacksuccess, callbackfail)
	{
		$.ajax({
			type:"POST",
			url: route["gastos_pessoais"],
			success:function(resp)
			{
				console.log(resp);
				callbacksuccess(resp);
			},
			error:function(a,error,c)
			{
				console.error(error);
				if(callbackfail != undefined){callbackfail(error);}
			}
		});
	}


}