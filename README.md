## [Appverse Ionic](http://appverse.org/)
![](http://appversed.files.wordpress.com/2012/12/logo.png)

### generator-appverse-ionic[![Build Status](https://secure.travis-ci.org/someuser/generator-appverse-ionic.png?branch=master)](https://travis-ci.org/someuser/generator-appverse-ionic)

This is a [Yeoman](http://yeoman.io) Generator for Appverse - Ionic


Requirements
-------------
**Nodejs** and **NPM** package manager must be installed.

* Install **bower** and **grunt-cli**.

```bash
    npm install -g bower grunt-cli
```

* Install **yeoman** if it is not installed previously.

```bash
    npm install -g yo
```

Installing
-------------

* Install the Appverse Ionic generator NPM package.

```bash
    npm install -g generator-appverse-ionic
```

Running
-------------

* Create a new project using the **generator-appverse-ionic**

  Create a directoy:

    ```bash
        mkdir testApp
    ```

    ```bash
        cd testApp
    ```

    Execute the generator:

    ```bash
        yo appverse-ionic
    ```

    Alternatively, you can load demonstration code:

    ```bash
        yo appverse-ionic --demo
    ```

    [Yeoman](http://yeoman.io) will generate a boilerplate project with **Appverse - Ionic**.

    Execute grunt to test it:

    ```bash
        grunt server
    ```

    or

    ```bash
        grunt server:open
    ```

    to auto open your default browser with the application.



#### From sources
* Get sources from [Appverse Repo](https://appverse.gftlabs.com/git/plugins/servlet/readmeparser/display/FATE/generator-appverse-ionic/)

* Link the package

```bash
    npm link
```

That will create a symlink to your npm cache.
Now you can execute the generator:

```bash
    yo appverse-ionic
```

Test:

```bash
    npm test
```

Execution:

```bash
    yo appverse-ionic
```

### Options

It's possible to call the generator using arguments and skipping prompts.

* The first option is to show code for demonstration purposes

```bash
    $ yo appverse-ionic --code
```

#### Skip install
Add the skip-install argument to skip npm and bower install process.

```bash
    yo appverse-ionic --skip-install
```

The generator will execute 'grunt list' tasks when finish to report all the available grunt tasks into the README.md of the generated project.
If --skip-install was used, 'grunt list' wont be executed, as it needs node_modules.

```bash
    npm install
```

```bash
    grunt list
```

### Troubleshoting

* Browser-Sync

Browser-Sync is a tool for synchronized cross-device testing; useful when youâ€™re targeting the multi-device web.
Having trouble installing Browsersync on Windows? The most common reason for npm to throw errors when compiling **Browser-Sync** is that some of the dependencies (e.g. node-gypneed Visual C++ runtime libraries.The way to resolve this is to install [Visual Studio](https://www.visualstudio.com). At the time of this writing (Feb 2015) the compilation works fine with Visual Studio 2013 Update 4. You can then tell **npm** which version of Visual Studio you are using by the following command:

```bash
   npm install -g browser-sync --msvs_version=2013
```

  With [Visual Studio 2015](https://www.visualstudio.com)

  ```bash
      npm install -g browser-sync --msvs_version=2015
  ```

  This package depends on socket.io, follow this link to solve installation problems with socket.io or other packages that executes C++ compilation on postinstall script: [fix-node-gyp-rebuild-error-on-windows](https://www.robertkehoe.com/2015/03/fix-node-gyp-rebuild-error-on-windows)

* node-gyp

Some dependant pagackages use **node-gyp**, a cross-platform command-line tool written in Node.js for compiling native addon modules for Node.js.
* On Unix:
  python (v2.7 recommended, v3.x.x is not supported)
  make
  A proper C/C++ compiler toolchain, like GCC
* On Mac OS X:
  python (v2.7 recommended, v3.x.x is not supported) (already installed on Mac OS X)
  Xcode
  You also need to install the Command Line Tools via Xcode. You can find this under the menu Xcode -> Preferences -> Downloads
  This step will install gcc and the related toolchain containing make
* On Windows:
  * Python (v2.7.3 recommended, v3.x.x is not supported)
    Make sure that you have a PYTHON environment variable, and it is set to drive:\path\to\python.exe not to a folder
  * Windows XP/Vista/7:
    [Microsoft Visual Studio C++ 2013](https://www.visualstudio.com) (Express version works well)
    If the install fails, try uninstalling any C++ 2010 x64&x86 Redistributable that you have installed first
    If you get errors that the 64-bit compilers are not installed you may also need the compiler update for the Windows SDK 7.1
  * Windows 7/8.1:
    [Microsoft Visual Studio C++ 2013](https://www.visualstudio.com) for Windows Desktop (Express version works well)**
  * All Windows Versions
    For 64-bit builds of node and native modules you will also need the **Windows 7 64-bit SDK**
    You may need to run one of the following commands if your build complains about WindowsSDKDir not being set, and you are sure you have already installed the SDK:

    call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x86
    call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x64

## License

Copyright (c) 2012 GFT Appverse, S.L., Sociedad Unipersonal.

 This Source  Code Form  is subject to the  terms of  the Appverse Public License
 Version 2.0  ("APL v2.0").  If a copy of  the APL  was not  distributed with this
file, You can obtain one at <http://appverse.org/#/license/information>.

 Redistribution and use in  source and binary forms, with or without modification,
 are permitted provided that the  conditions  of the  AppVerse Public License v2.0
 are met.

 THIS SOFTWARE IS PROVIDED BY THE  COPYRIGHT HOLDERS  AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS  OR IMPLIED WARRANTIES, INCLUDING, BUT  NOT LIMITED TO,   THE IMPLIED
 WARRANTIES   OF  MERCHANTABILITY   AND   FITNESS   FOR A PARTICULAR  PURPOSE  ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE  COPYRIGHT OWNER  OR  CONTRIBUTORS  BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL,  SPECIAL,   EXEMPLARY,  OR CONSEQUENTIAL DAMAGES  (INCLUDING, BUT NOT
 LIMITED TO,  PROCUREMENT OF SUBSTITUTE  GOODS OR SERVICES;  LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING  IN  ANY WAY OUT  OF THE USE  OF THIS  SOFTWARE,  EVEN  IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.