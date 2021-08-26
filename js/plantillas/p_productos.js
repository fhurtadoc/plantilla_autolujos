var productos=`
                                     
                      <div class="container">
                        <div class="row p-4">
                          <div class="col-md-5">
                            <div class="card">
                              <div class="card-body">
                                <!-- FORM TO ADD TASKS -->
                                <form id="form_products">
                                  <div class="form-group">
                                    <input type="text" id="name_product" placeholder="nombre" class="form-control">
                                  </div>
                                  <div class="form-group">
                                    <input type="text" id="category_product" placeholder="categoria" class="form-control">
                                  </div>
                                  <div class="form-group">
                                    <textarea id="description_product" cols="30" rows="10" class="form-control" placeholder="Descripcion"></textarea>
                                  </div>
                                  <div class="form-group">
                                    <input type="text" id="imagen_product" placeholder="categoria" class="form-control">
                                  </div>
                                  <input type="hidden" id="taskId">
                                  <button type="submit" class="btn btn-primary">
                                    GUARDAR PRODUCTO
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                  
                          <div class="col-md-7">
                            <div class="card my-4" id="task-result">
                              <div class="card-body">
                                <h2 style="font-family: 'OswaldLight'">productos</h2>
                                <ul id="container"></ul>
                              </div>
                            </div>
                            <table class="table table-bordered table-sm">
                              <thead>
                                <tr>
                                <td>Id</td>
                                  <td>Nombre</td>
                                  <td>Descripcion</td>
                                  <td>Categoria</td>
                                </tr>
                              </thead>
                              <tbody id="products"></tbody>
                            </table>
                          </div>
                        </div>
                      </div>

`;