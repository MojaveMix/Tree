import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Ck({dataContent , libelle}) {

        return (
            <div className=" float-end"   >
                <h2>{libelle}</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data={dataContent}
                  
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }

                
                />


            <button className="btn btn-primary mt-2  col-6 float-start " >update</button>

            </div>
        );

}

export default Ck;
