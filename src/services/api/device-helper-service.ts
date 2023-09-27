import FingerprintJS from '@fingerprintjs/fingerprintjs';

let deviceId: string;
export const getDeviceId = async () => {
    if (!deviceId) {
        // We recommend to call `load` at application startup.
        const fp = await FingerprintJS.load();

        // The FingerprintJS agent is ready.
        // Get a visitor identifier when you'd like to.
        const result = await fp.get();

        // This is the visitor identifier:
        deviceId = result.visitorId;
    }
    return deviceId;
}