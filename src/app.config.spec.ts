import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app.config';

describe('App Configuration', () => {
    it('should provide necessary providers', () => {
        TestBed.configureTestingModule({
            providers: appConfig.providers
        });

        const router = TestBed.inject(provideRouter);

        expect(router).toBeDefined();
    });

    it('should configure routes correctly', () => {
        TestBed.configureTestingModule({
            providers: appConfig.providers
        });

        const config = TestBed.inject(provideRouter);

        expect(config).toBeDefined();
    });

    it('should provide HTTP client', () => {
        TestBed.configureTestingModule({
            providers: appConfig.providers
        });

        const httpClient = TestBed.inject(provideHttpClient);

        expect(httpClient).toBeDefined();
    });

    it('should provide animations', () => {
        TestBed.configureTestingModule({
            providers: appConfig.providers
        });

        const animations = TestBed.inject(provideAnimationsAsync);

        expect(animations).toBeDefined();
    });
});
