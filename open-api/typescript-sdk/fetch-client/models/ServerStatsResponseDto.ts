/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UsageByUserDto } from './UsageByUserDto';
import {
    UsageByUserDtoFromJSON,
    UsageByUserDtoFromJSONTyped,
    UsageByUserDtoToJSON,
} from './UsageByUserDto';

/**
 * 
 * @export
 * @interface ServerStatsResponseDto
 */
export interface ServerStatsResponseDto {
    /**
     * 
     * @type {number}
     * @memberof ServerStatsResponseDto
     */
    photos: number;
    /**
     * 
     * @type {number}
     * @memberof ServerStatsResponseDto
     */
    usage: number;
    /**
     * 
     * @type {Array<UsageByUserDto>}
     * @memberof ServerStatsResponseDto
     */
    usageByUser: Array<UsageByUserDto>;
    /**
     * 
     * @type {number}
     * @memberof ServerStatsResponseDto
     */
    videos: number;
}

/**
 * Check if a given object implements the ServerStatsResponseDto interface.
 */
export function instanceOfServerStatsResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "photos" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "usageByUser" in value;
    isInstance = isInstance && "videos" in value;

    return isInstance;
}

export function ServerStatsResponseDtoFromJSON(json: any): ServerStatsResponseDto {
    return ServerStatsResponseDtoFromJSONTyped(json, false);
}

export function ServerStatsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerStatsResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'photos': json['photos'],
        'usage': json['usage'],
        'usageByUser': ((json['usageByUser'] as Array<any>).map(UsageByUserDtoFromJSON)),
        'videos': json['videos'],
    };
}

export function ServerStatsResponseDtoToJSON(value?: ServerStatsResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'photos': value.photos,
        'usage': value.usage,
        'usageByUser': ((value.usageByUser as Array<any>).map(UsageByUserDtoToJSON)),
        'videos': value.videos,
    };
}
