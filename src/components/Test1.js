import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const Test1 = () =>{
    const myTheme = {
        // Theme object to extends default dark theme.
      };

    return(
        <ImageEditor
        includeUI={{
          loadImage: {
            path: 'certTemplate.jpeg',
            name: 'certTemplate',
          },
          theme: myTheme,
          menu: ['shape', 'filter','text','icon'],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    )
}
export default Test1