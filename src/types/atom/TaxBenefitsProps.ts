export interface TaxBenefitProps {
    createdAt: string;
    creditAmounts: number;
    creditDeduction: number;
    donationAmounts: number;
    donationDeduction: number;
    educationAmounts: number;
    educationDeduction: number;
    housingAmounts: number;
    housingDeduction: number;
    insureAmounts: number;
    insureDeduction: number;
    leasAmounts: number;
    leasDeduction: number;
    medicalAmounts: number;
    medicalDeduction: number;
    pensionAmounts: number;
    pensionDeduction: number;
}

export interface SavingsProps {
	data: TaxBenefitProps
}