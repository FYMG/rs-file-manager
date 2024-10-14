const loc = {
  'default-username': 'Username',
  'welcome-message': 'Welcome to the File Manager, {{username}}!',
  'current-directory': 'You are currently in {{dir}}',
  'exit-message': 'Thank you for using File Manager, {{username}}, goodbye!',
  'something-wrong': 'Something went wrong',
  'ls-file': 'File',
  'ls-directory': 'Directory',
  'ls-type': 'Type',
  'ls-name': 'Name',
  'os-eol': 'Current system End-Of-Line: {{EOL}}',
  'os-username': 'Current system username: {{username}}',
  'os-home-dir': 'Current system home directory: {{homeDir}}',
  'os-cpus': 'Current system CPUs: {{cpus}}',
  'os-cpus-model': 'Model',
  'os-cpus-clock-rate': 'Clock Rate (GHz)',
  'os-arch': 'Current system architecture: {{arch}}',
  'add-success': 'File added successfully path: {{path}}',
  'rm-success': 'File removed successfully path: {{path}}',
  'rn-success': 'File renamed successfully from: {{src}} to: {{dest}}',
  'cp-success': 'File copied successfully from: {{src}} to: {{dest}}',
  'mv-success': 'File moved successfully from: {{src}} to: {{dest}}',
  'compress-success': 'File compressed successfully path to compressed file: {{path}}',
  'decompress-success':
    'File decompressed successfully path to decompressed file: {{path}}',
  'error-unknown-command': 'Unknown command: {{command}}',
  'error-unknown-os-arg':
    'Unknown OS argument "{{arg}}". Available: --EOL, --username, --homedir, --cpus, --architecture',
  'error-folder-path-not-found': 'Folder or file not found',
  'error-args-count':
    'Wrong number of arguments for command "{{command}}" expected {{expected}} but got {{count}}',
  'error-fs-operation-failed-exists': 'FS operation failed, {{filePath}} already exists',
  'error-fs-operation-failed-never-exist':
    'FS operation failed, {{filePath}} never exists',
};

export default loc;
