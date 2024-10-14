const loc = {
  'default-username': 'Username',
  'welcome-message': 'Welcome to the File Manager, {{username}}!',
  'current-directory': 'You are currently in {{dir}}',
  'exit-message': 'Thank you for using File Manager, {{username}}, goodbye!',
  'unknown-command': 'Unknown command',
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
  'error-unknown-os-arg':
    'Unknown OS argument: {{arg}}. Available: --eol, --username, --homedir, --cpus, --architecture',
  'error-folder-path-not-found': 'Folder or file not found',
  'error-args-missing': 'Argument(s) missing',
  'error-fs-operation-failed-exists': 'FS operation failed, {{filePath}} already exists',
  'error-fs-operation-failed-never-exist':
    'FS operation failed, {{filePath}} never exists',
};

export default loc;
