import { getLandPlotPricePerSotka } from '@/object-record/record-field/ui/utils/getLandPlotPricePerSotka';

describe('getLandPlotPricePerSotka', () => {
  it('derives the USD price per sotka from the total price and area', () => {
    expect(
      getLandPlotPricePerSotka({
        fieldName: 'priceUsd',
        valueToPersist: { amountMicros: 25_000_000_000, currencyCode: 'USD' },
        currentAreaSotky: 10,
        currentPriceUsd: null,
      }),
    ).toEqual({ amountMicros: 2_500_000_000, currencyCode: 'USD' });
  });

  it('recalculates when the area changes and clears the value without usable inputs', () => {
    expect(
      getLandPlotPricePerSotka({
        fieldName: 'areaSotky',
        valueToPersist: 20,
        currentAreaSotky: 10,
        currentPriceUsd: { amountMicros: 25_000_000_000, currencyCode: 'USD' },
      }),
    ).toEqual({ amountMicros: 1_250_000_000, currencyCode: 'USD' });

    expect(
      getLandPlotPricePerSotka({
        fieldName: 'areaSotky',
        valueToPersist: 0,
        currentAreaSotky: 10,
        currentPriceUsd: { amountMicros: 25_000_000_000, currencyCode: 'USD' },
      }),
    ).toBeNull();
  });

  it('does not affect other objects or fields', () => {
    expect(
      getLandPlotPricePerSotka({
        fieldName: 'amount',
        valueToPersist: 10,
        currentAreaSotky: 10,
        currentPriceUsd: { amountMicros: 25_000_000_000, currencyCode: 'USD' },
      }),
    ).toBeUndefined();
  });
});
