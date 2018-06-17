class Gasto
{

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador
	 */
	static getGastosPessoais(mes, ano, callbacksuccess, callbackfail)
	{
		new GastoDAO().getGastosPessoais(callbacksuccess, callbackfail); 
	}

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador e por tipo de despesa((pelo nome da despesa))
	 */
	static getGastosEspecificosPessoais(mes, ano, chave, callbacksuccess, callbackfail)
	{
		new GastoDAO().getGastosEspecificosPessoais(mes, ano, chave, callbacksuccess, callbackfail); 
	}

	/**
	 * Obtem todos os gastos (de todos) de um determinado mes e ano
	 */
	static getGastosTotais(mes, ano , callbacksuccess, callbackfail)
	{
		new GastoDAO().getGastosTotais(mes, ano , callbacksuccess, callbackfail); 
	}

	/**
	 * Obtem os gastos publicos por vereador (pelo nome do vereador)
	 */
	static getGastosPorNome(mes, ano, vereador, callbacksuccess, callbackfail)
	{
		new GastoDAO().getGastosPorNome(mes, ano , vereador, callbacksuccess, callbackfail); 
	}
}