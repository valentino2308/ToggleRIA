export interface ConfigurationToggle{
  tempDirectory: string;
  outputDirectory: string;
  listConfigurationWs: CapacityToggle[];
}
interface CapacityToggle{
  capacity: string;
  configuration: ConfigurationFileToggle;
}
interface ConfigurationFileToggle{
  fileXMLFeature: string;
  fileXMLServer: string;
}
