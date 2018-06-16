class Gasto
{

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador
	 */
	static getGastosPessoais(callbacksuccess, callbackfail)
	{
		new GastoDAO().getGastosPessoais(callbacksuccess, callbackfail); 
	}

}