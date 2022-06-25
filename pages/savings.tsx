import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getMyTaxData } from 'src/api/mytax';

import { TaxBenefitProps } from '@/types/atom/TaxBenefitsProps';
import SavingsView from '@/views/Savings';

const Savings:NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => <SavingsView data={data} />;

export default Savings;

export const getServerSideProps:GetServerSideProps = async () =>
{
	const res = await getMyTaxData();
	const taxBenefitData = JSON.parse(JSON.stringify(res)) as TaxBenefitProps;

	if (res.code)
	{
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	return { props: { data: taxBenefitData } };
};