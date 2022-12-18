import {removeDuplicates} from "./main";


const beforeJSON = JSON.stringify([{
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

const secondBeforeJSON = JSON.stringify([{
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
            },
            "dupa": {
                "wolowa": false,
                "cipowa": true,
                "inna": {
                    "tak": false,
                    "nie": true
                }
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
            "currentPrice": {
                "amountExTax": 49
            },
            "dupa": {
                "cipowa": false,
                "inna": {
                    "tak": true,
                    "nie": false
                }
            },
            "taxes": [
                {
                    "type": "VAT",
                    "amount": 9.13,
                    "rate": 25
                }],
        }
    }
}
]);

const secondRequiredJSON = JSON.stringify([{
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
            },
            "dupa": {
                "wolowa": false,
                "cipowa": true,
                "inna": {
                    "tak": false,
                    "nie": true
                }
            }
        }
    }
}, {
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085",
        "pricing": {
            "currentPrice": {
                "amountExTax": 49
            },
            "dupa": {
                "cipowa": false,
                "inna": {
                    "tak": true,
                    "nie": false
                }
            },
            "taxes": [
                {
                    "type": "VAT",
                    "amount": 9.13,
                    "rate": 25
                }],
        }
    }
}
]);

const thirdBeforeJSON = JSON.stringify([{
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
            },
            "dupa": {
                "wolowa": false,
                "cipowa": true,
                "inna": {
                    "tak": false,
                    "nie": true
                }
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
            "dupa": {
                "wolowa": false,
                "cipowa": true,
                "inna": {
                    "tak": false,
                    "nie": true
                }
            }
        }
    }
}
]);

const thirdRequiredJSON = JSON.stringify([{
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
            },
            "dupa": {
                "wolowa": false,
                "cipowa": true,
                "inna": {
                    "tak": false,
                    "nie": true
                }
            }
        }
    }
}, {
    "id": "3663602537085",
    "attributes": {
        "ean": "3663602537085"
    }
}
]);

test("should return Array without duplicates (between every each scope/nested lvl)", () => {
    expect(removeDuplicates(beforeJSON)).toEqual(requiredList);
    expect(removeDuplicates(beforeJSON)).not.toEqual(beforeJSON);
    expect(removeDuplicates(beforeJSON)).not.toEqual(wrongJSON)
    expect(removeDuplicates(beforeJSON)).not.toEqual(secondWrongJSON)

    expect(removeDuplicates(secondBeforeJSON)).toEqual(secondRequiredJSON);

    expect(removeDuplicates(thirdBeforeJSON)).toEqual(thirdRequiredJSON);
})