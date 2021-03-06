import {ILocation, Location} from '../models/location';

export namespace Utils {
    export namespace Numeric {
        export function randomBetweenNumbers(min: number, max: number): number {
            const r = (Math.random() * (max - min)) + min;
            return (r === min) ? this.randomBetweenNumbers(min, max) : r;
        }
    }

    export namespace location {
        export const validLat = (Location.MIN_LATITUDE + Location.MAX_LATITUDE) / 2;
        export const validLon = (Location.MIN_LONGITUDE + Location.MAX_LONGITUDE) / 2;

        export const invalidLocationData = [
            {name: 'undefined latitude', location: {latitude: undefined, longitude: validLon}},
            {name: 'undefined longitude', location: {latitude: validLat, longitude: undefined}},
            {name: 'undefined both longitude and latitude', location: {latitude: undefined, longitude: undefined}},
            {name: 'boolean latitude', location: {latitude: true, longitude: validLon}},
            {name: 'boolean longitude', location: {latitude: validLat, longitude: true}},
            {name: 'boolean both longitude and latitude', location: {latitude: false, longitude: false}},
            {name: 'string both longitude and latitude', location: {latitude: 'hello', longitude: 'world'}},
            {name: 'NaN both longitude and latitude', location: {latitude: NaN, longitude: NaN}},
            {name: 'alphanumeric both longitude and latitude', location: {latitude: '2.a34', longitude: '432.sdq3wr'}},
            {name: 'out of range latitude', location: {latitude: 48, longitude: validLon}},
            {name: 'out of range longitude', location: {latitude: validLat, longitude: -12.35}},
            {name: 'max boundary latitude', location: {latitude: Location.MAX_LATITUDE, longitude: validLon}},
            {name: 'min boundary latitude', location: {latitude: Location.MIN_LATITUDE, longitude: validLon}},
            {name: 'max boundary longitude', location: {latitude: validLat, longitude: Location.MAX_LONGITUDE}},
            {name: 'min boundary longitude', location: {latitude: validLat, longitude: Location.MIN_LONGITUDE}}
        ] as {name: string, location: ILocation}[];

        export function generateValidLocation(): Location {
            const latitude = Numeric.randomBetweenNumbers(Location.MIN_LATITUDE, Location.MAX_LATITUDE);
            const longitude = Numeric.randomBetweenNumbers(Location.MIN_LONGITUDE, Location.MAX_LONGITUDE);
            return new Location({ latitude, longitude });
        }

        export function generateValidLocations(length): Location[] {
            return Array.from({length}, generateValidLocation);
        }
    }
}
