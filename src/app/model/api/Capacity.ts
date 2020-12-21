import { Server } from './../Server';
import { Feature } from './../Feature';

export interface Capacity{
  fileNameFeature: string;
  inProgress: boolean;
  outputDirectory: string;
  pathConfFeatures: string;
  pathConfServers: string;
  pathFeatureFileOnServer: string;
  tempDirectory: string;
  type: string;
  listFeatures: Feature[];
  listServers: Server[];
}

