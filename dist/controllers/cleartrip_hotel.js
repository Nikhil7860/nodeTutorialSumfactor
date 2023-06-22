"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.view_booking = exports.provisional_booking = exports.get_hotel_policy = exports.get_hotel_details = exports.searchHotelsByCity = exports.geo_search = void 0;
const axios_1 = __importDefault(require("axios"));
const geo_search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let { checkInDate, checkOutDate, hotelInfo, latitude, longitude, occupancy, radius } = req.body;
            let newObj = {
                url: `https://apistaging.cleartrip.com/hotels/api/v2/geo-search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&hotelInfo=${hotelInfo}&latitude=${latitude}&longitude=${longitude}&nri&occupancy=${occupancy}&radius=${radius}&sellingCountry=IN&sellingCurrency=INR`,
                request_body: req.body
            };
            var config = {
                method: 'get',
                url: process.env.CLEAR_TRIP_LAMBDA_URL,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': process.env.X_CT_API_KEY,
                    'X-CT-DOMAIN': process.env.X_T_DOMAIN,
                    'X-CT-SOURCETYPE': process.env.X_CT_SOURCETYPE,
                    'Content-Type': 'application/json',
                    'Cookie': process.env.COOKIE
                },
                data: newObj
            };
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error.data);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.geo_search = geo_search;
const searchHotelsByCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let { checkInDate, checkOutDate, hotelInfo, occupancy, city, country } = req.body;
            let newObj = {
                url: `https://apistaging.cleartrip.com/hotels/api/v2/search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&city=${city}&country=${country}&hotelInfo=${hotelInfo}&nri=false&occupancy=${occupancy}&sellingCountry=IN&sellingCurrency=INR`,
                request_body: req.body
            };
            var config = {
                method: 'get',
                url: `https://003a3xw760.execute-api.ap-south-1.amazonaws.com/default/Cleartrip_HotelApi_Lambda_Fun`,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': 'd17d22f02dfc18088e59c4b93ca5024b',
                    'X-CT-DOMAIN': 'https://preprodapi.mojoboxx.com',
                    'X-CT-SOURCETYPE': 'API',
                    'Content-Type': 'application/json',
                    'Cookie': 'ct-auth-preferences=IN|INR; currency-pref=INR'
                },
                data: newObj
            };
            console.log("🚀 ~ file: CleartripHotels.controller.js:61 ~ GeoSearchHotels ~ config", config);
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error.data);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.searchHotelsByCity = searchHotelsByCity;
const get_hotel_details = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let { checkInDate, checkOutDate, hotelInfo, occupancy, hotelId } = req.body;
            let newObj = {
                url: `https://apistaging.cleartrip.com/hotels/api/v2/detail?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&hotelId=${hotelId}&hotelInfo=${hotelInfo}&nri=false&occupancy=${occupancy}&sellingCountry=IN&sellingCurrency=INR`,
                request_body: req.body
            };
            var config = {
                method: 'get',
                url: `https://003a3xw760.execute-api.ap-south-1.amazonaws.com/default/Cleartrip_HotelApi_Lambda_Fun`,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': 'd17d22f02dfc18088e59c4b93ca5024b',
                    'X-CT-DOMAIN': 'https://preprodapi.mojoboxx.com',
                    'X-CT-SOURCETYPE': 'API',
                    'Content-Type': 'application/json',
                    'Cookie': 'ct-auth-preferences=IN|INR; currency-pref=INR'
                },
                data: newObj
            };
            console.log("🚀 ~ file: CleartripHotels.controller.js:61 ~ GeoSearchHotels ~ config", config);
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error.data);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.get_hotel_details = get_hotel_details;
const get_hotel_policy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let newObj = {
                url: "https://apistaging.cleartrip.com/hotels/api/v2/get-policy",
                request_body: req.body
            };
            var config = {
                method: 'post',
                url: `https://003a3xw760.execute-api.ap-south-1.amazonaws.com/default/Cleartrip_HotelApi_Lambda_Fun`,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': 'd17d22f02dfc18088e59c4b93ca5024b',
                    'X-CT-DOMAIN': 'https://preprodapi.mojoboxx.com',
                    'X-CT-SOURCETYPE': 'API',
                    'Content-Type': 'application/json',
                },
                data: newObj
            };
            console.log("🚀 ~ file: CleartripHotels.controller.js:61 ~ GeoSearchHotels ~ config", config);
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.get_hotel_policy = get_hotel_policy;
const provisional_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let newObj = {
                url: "https://apistaging.cleartrip.com/hotels/api/v2/provisional-book",
                request_body: req.body
            };
            var config = {
                method: 'post',
                url: `https://003a3xw760.execute-api.ap-south-1.amazonaws.com/default/Cleartrip_HotelApi_Lambda_Fun`,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': 'd17d22f02dfc18088e59c4b93ca5024b',
                    'X-CT-DOMAIN': 'https://preprodapi.mojoboxx.com',
                    'X-CT-SOURCETYPE': 'API',
                    'Content-Type': 'application/json',
                },
                data: newObj
            };
            console.log("🚀 ~ file: CleartripHotels.controller.js:61 ~ GeoSearchHotels ~ config", config);
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.provisional_booking = provisional_booking;
const view_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((resolve, reject) => {
            let { itineraryId } = req.query;
            let newObj = {
                url: `https://apistaging.cleartrip.com/hotels/api/v2/itinerary/${itineraryId}`,
                request_body: {}
            };
            var config = {
                method: 'get',
                url: `https://003a3xw760.execute-api.ap-south-1.amazonaws.com/default/Cleartrip_HotelApi_Lambda_Fun`,
                headers: {
                    'Accept-Language': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
                    'X-CT-API-KEY': 'd17d22f02dfc18088e59c4b93ca5024b',
                    'X-CT-DOMAIN': 'https://preprodapi.mojoboxx.com',
                    'X-CT-SOURCETYPE': 'API',
                    'Content-Type': 'application/json',
                    'Cookie': 'ct-auth-preferences=IN|INR; currency-pref=INR'
                },
                data: newObj
            };
            console.log("🚀 ~ file: CleartripHotels.controller.js:61 ~ GeoSearchHotels ~ config", config);
            (0, axios_1.default)(config)
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function* () {
                    return resolve(JSON.parse(response.data));
                });
            })
                .catch(function (error) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("🚀 ~ file: cleartrip_hotel.ts:38 ~ returnnewPromise ~ error:", error);
                    return reject(error);
                });
            });
        });
    }
    catch (error) {
        console.log("🚀 ~ file: cleartrip_hotel.ts:42 ~ constgeo_search= ~ error:", error);
    }
});
exports.view_booking = view_booking;
//# sourceMappingURL=cleartrip_hotel.js.map