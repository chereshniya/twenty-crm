type CurrencyValue = {
  amountMicros: number | null;
  currencyCode: string | null;
};

const isCurrencyValue = (value: unknown): value is CurrencyValue =>
  typeof value === 'object' &&
  value !== null &&
  'amountMicros' in value &&
  'currencyCode' in value;

const isAreaSotky = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value > 0;

export const getLandPlotPricePerSotka = ({
  fieldName,
  valueToPersist,
  currentAreaSotky,
  currentPriceUsd,
}: {
  fieldName: string;
  valueToPersist: unknown;
  currentAreaSotky: unknown;
  currentPriceUsd: unknown;
}): CurrencyValue | null | undefined => {
  if (fieldName !== 'areaSotky' && fieldName !== 'priceUsd') {
    return undefined;
  }

  const areaSotky =
    fieldName === 'areaSotky' ? valueToPersist : currentAreaSotky;
  const priceUsd = fieldName === 'priceUsd' ? valueToPersist : currentPriceUsd;

  if (!isAreaSotky(areaSotky) || !isCurrencyValue(priceUsd)) {
    return null;
  }

  if (priceUsd.amountMicros === null) {
    return null;
  }

  return {
    amountMicros: Math.round(priceUsd.amountMicros / areaSotky),
    currencyCode: priceUsd.currencyCode ?? 'USD',
  };
};
