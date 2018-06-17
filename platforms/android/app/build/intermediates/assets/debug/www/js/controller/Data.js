class Data
{
	/**
	 * Obtem o mes atual
	 */
	static getMesAtual()
	{
		const mes = new Date().getMonth()+1;
		return mes < 10 ? `0${mes}` : mes;
	}

	/**
	 * Obtem o ano atual
	 */
	static getAnoAtual()
	{
		return new Date().getFullYear();
	}

}