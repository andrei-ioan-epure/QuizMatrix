import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DomainsService } from './domains.service';
import { Domain } from '../../models/domain';

describe('DomainsService', () => {
  let service: DomainsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DomainsService],
    });

    service = TestBed.inject(DomainsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get domain by id', () => {
    const expectedDomain: Domain = {
      id_domain: 1,
      domain_name: 'example.com',
      icon_path: 'path/to/icon',
    };

    const id = 1;

    service.getDomainById(id).subscribe(
      (domain) => {
        expect(domain).toEqual(expectedDomain);
      },
      (error) => {
        fail('Should not have errored');
      }
    );

    const req = httpTestingController.expectOne(
      `http://localhost:8090/domain/id/${id}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(expectedDomain);
  });

  it('should get domain by name', () => {
    const expectedDomain: Domain = {
      id_domain: 1,
      domain_name: 'example.com',
      icon_path: 'path/to/icon',
    };

    const name = 'example';

    service.getDomainByName(name).subscribe(
      (domain) => {
        expect(domain).toEqual(expectedDomain);
      },
      (error) => {
        fail('Should not have errored');
      }
    );

    const req = httpTestingController.expectOne(
      `http://localhost:8090/domain/name/${name}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(expectedDomain);
  });
});
