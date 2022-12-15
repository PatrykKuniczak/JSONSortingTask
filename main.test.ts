import {removeDuplicates} from "./main";


const actualJSON = JSON.stringify([{
    "type": "product",
    "id": "3663602537083",
    "attributes": {
        "ean": "3663602537083",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
                "amountExTax": 45.67
            }
        }
    }
}, {
    "type": "product",
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
                "amountExTax": 45.67
            },
            "taxes": [
                {
                    "type": "VAT",
                    "amount": 9.13,
                    "rate": 20
                }],
        }
    }
}
]);

const requiredList = JSON.stringify([{
    "type": "product",
    "id": "3663602537083",
    "attributes": {
        "ean": "3663602537083",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
                "amountExTax": 45.67
            }
        }
    }
}, {
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085",
        "pricing": {
            "taxes": [
                {
                    "type": "VAT",
                    "amount": 9.13,
                    "rate": 20
                }],
        }
    }
}
]);

const wrongJSON = JSON.stringify([{
    "type": "product",
    "id": "3663602537083",
    "attributes": {
        "ean": "3663602537083",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
                "amountExTax": 45.67
            }
        }
    }
}, {
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {},
            "taxes": [
                {
                    "type": "VAT",
                    "amount": 9.13,
                    "rate": 20
                }],
        }
    }
}
]);

const secondWrongJSON = JSON.stringify([{
    "type": "product",
    "id": "3663602537083",
    "attributes": {
        "ean": "3663602537083",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
                "amountExTax": 45.67
            }
        }
    }
}, {
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085",
        "name": "GoodHome Halland White Oak test asuwu Real wood top layer flooring, 1.37m² Pack",
        "pricing": {
            "currencyCode": "GBP",
            "currentPrice": {
                "amountIncTax": 54.8,
            },
            "taxes": [
                {
                    "type": "VAT",
                    "rate": 20
                }],
        }
    }
}
]);


test("should return Array without duplicates (between every each scope)", () => {
    expect(removeDuplicates(actualJSON)).toEqual(requiredList);
    expect(removeDuplicates(actualJSON)).not.toEqual(actualJSON);
    expect(removeDuplicates(actualJSON)).not.toEqual(wrongJSON)
    expect(removeDuplicates(actualJSON)).not.toEqual(secondWrongJSON)
})