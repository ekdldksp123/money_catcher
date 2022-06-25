export interface TaxRecommendation {
    assets_type: string,
    financial_company_name: string,
    limit: number,
    product_name: string,
    tax: number,
    tax_type: string
}

export const RecommendedData: TaxRecommendation[] = [
	{
		assets_type: '증권',
		financial_company_name: '대신증권',
		limit: 100000000,
		product_name: '개인종합자산계좌',
		tax: 5,
		tax_type: '수수료 우대'
	},
	{
		assets_type: '은행',
		financial_company_name: '우리은행',
		limit: 7000000,
		product_name: '개인형퇴직연금',
		tax: 13.2,
		tax_type: '세액 공제'
	},
	{
		assets_type: '은행',
		financial_company_name: '우리은행',
		limit: 2400000,
		product_name: '주택청약통장',
		tax: 40,
		tax_type: '세액 공제'
	},
	{
		assets_type: '증권',
		financial_company_name: '한화투자증권',
		limit: 100000000,
		product_name: '개인종합자산계좌',
		tax: 4.5,
		tax_type: '수수료 우대'
	},
	{
		assets_type: '은행',
		financial_company_name: '신한은행',
		limit: 7000000,
		product_name: '개인형퇴직연금',
		tax: 13,
		tax_type: '세액 공제'
	},
	{
		assets_type: '은행',
		financial_company_name: '우리은행',
		limit: 2400000,
		product_name: '주택청약통장',
		tax: 39.4,
		tax_type: '세액 공제'
	},
	{
		assets_type: '증권',
		financial_company_name: '키움증권',
		limit: 100000000,
		product_name: '개인종합자산계좌',
		tax: 3.2,
		tax_type: '수수료 우대'
	},
	{
		assets_type: '은행',
		financial_company_name: '신한은행',
		limit: 7000000,
		product_name: '개인형퇴직연금',
		tax: 12.9,
		tax_type: '세액 공제'
	},
	{
		assets_type: '은행',
		financial_company_name: '기업은행',
		limit: 2000000,
		product_name: '주택청약통장',
		tax: 40,
		tax_type: '세액 공제'
	}
];